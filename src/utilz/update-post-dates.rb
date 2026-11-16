require "date"
require "json"
require "open3"
require "optparse"
require "time"
require "yaml"
require_relative "site-media"

module UpdatePostDates
  def self.front_matter(text)
    match = /\A---\r?\n(.*?)^---[ \t]*\r?\n/m.match(text)
    raise "post front matter is missing" unless match
    [match[1], text[match[0].length..]]
  end

  def self.date_line(text)
    header, = front_matter(text)
    lines = header.lines.grep(/\Adate:/)
    raise "post needs exactly one date field" unless lines.length == 1
    lines.first
  end

  def self.normalized_date(line)
    raw = line.split(":", 2).last.strip
    value = YAML.safe_load(raw, permitted_classes: [Date, Time])
    value = raw.sub(/\s+#.*\z/, "") if value.is_a?(Date) || value.is_a?(Time)
    if value.is_a?(String) && value.match?(/\A\d{4}-\d{2}-\d{2}\z/)
      return [Date.iso8601(value).iso8601, "day"]
    end
    unless value.is_a?(String) && value.match?(/\A\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})\z/)
      raise "date must be YYYY-MM-DD or an ISO timestamp with an explicit timezone"
    end
    date, time = value.split("T", 2)
    Date.iso8601(date)
    raise "invalid timestamp time" unless time[0, 8].split(":").map(&:to_i).zip([23, 59, 59]).all? { |number, limit| number.between?(0, limit) }
    [Time.iso8601(value).utc.iso8601(3), "second"]
  end

  def self.set_field(header, key, value)
    pattern = /^#{Regexp.escape(key)}:[^\n]*(?:\n|\z)/
    line = "#{key}: #{JSON.generate(value)}\n"
    header.match?(pattern) ? header.sub(pattern, line) : "#{header}#{line}"
  end

  def self.run(root, dry_run: false)
    output, error, status = Open3.capture3(
      "git", "-C", root, "diff", "HEAD", "--find-renames", "--name-status", "-z", "--diff-filter=AMR", "--", "content/_posts"
    )
    raise "cannot read post changes: #{error.strip}" unless status.success?
    fields = output.split("\0")
    moves = {}
    mapping = {}
    overrides = {}
    repaired = []
    until fields.empty?
      kind = fields.shift
      previous = fields.shift
      relative = kind.start_with?("R") ? fields.shift : previous
      next unless relative.end_with?(".md")
      path = File.join(root, relative)
      text = File.read(path, encoding: "UTF-8")
      line = date_line(text)
      unless kind == "A"
        old, error, status = Open3.capture3("git", "-C", root, "show", "HEAD:#{previous}")
        raise "cannot read original post: #{error.strip}" unless status.success?
        next if date_line(old.force_encoding("UTF-8")) == line
      end
      date, precision = normalized_date(line)
      header, body = front_matter(text)
      precision_line = header.lines.find { |field| field.start_with?("date_precision:") }
      if precision_line
        previous_precision = YAML.safe_load(precision_line.split(":", 2).last)
        compatible = case previous_precision
        when "year" then precision == "day" && date.end_with?("-01-01")
        when "month" then precision == "day" && date.end_with?("-01")
        when "minute" then precision == "second" && date.end_with?(":00.000Z")
        else false
        end
        precision = previous_precision if compatible
      end
      header = set_field(set_field(header, "date", date), "date_precision", precision)
      overrides[path] = "---\n#{header}---\n#{body}"
      day = date[0, 10]
      name = File.basename(path)
      raise "post filename needs a date prefix: #{relative}" unless name.match?(/\A\d{4}-\d{2}-\d{2}-/)
      destination = File.join(root, "content", "_posts", day[0, 4], "#{day}#{name[10..]}")
      moves[path] = destination if path != destination
      text.scan(%r{/content/media/[^\s"'<>()\[\]{}?#]+}).uniq.each do |url|
        media = File.expand_path(URI::DEFAULT_PARSER.unescape(url).delete_prefix("/"), root)
        base = File.join(root, "content", "media")
        raise "media reference leaves its directory: #{url}" unless media.start_with?("#{base}/")
        relative_media = Pathname.new(media).relative_path_from(Pathname.new(base)).to_s
        tail = relative_media.sub(/\A\d{4}\//, "")
        target = File.join(base, day[0, 4], tail)
        next if target == media
        raise "shared media has conflicting destination years: #{url}" if moves.key?(media) && moves[media] != target
        moves[media] = target
        mapping[SiteMedia.url(root, media)] = SiteMedia.url(root, target)
      end
      repaired << SiteMedia.url(root, destination).delete_prefix("/")
    end
    SiteMedia.preflight(root, moves)
    edits = SiteMedia.reference_edits(root, mapping, overrides)
    if dry_run
      repaired.each { |path| puts "would update #{path}" }
    else
      SiteMedia.apply(root, moves, edits)
      repaired.each { |path| puts "updated #{path}" }
    end
    puts "no changed post dates" if repaired.empty?
  end
end

if $PROGRAM_NAME == __FILE__
  begin
    dry_run = false
    OptionParser.new { |options| options.on("--dry-run") { dry_run = true } }.parse!
    raise "unexpected arguments: #{ARGV.join(' ')}" unless ARGV.empty?
    UpdatePostDates.run(File.expand_path("../..", __dir__), dry_run: dry_run)
  rescue StandardError => error
    warn "Post date update failed: #{error.message}"
    exit 1
  end
end
