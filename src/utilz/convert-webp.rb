require "find"
require "open3"
require "optparse"
require "tmpdir"
require_relative "site-media"

module ConvertWebp
  MAX_EDGE = 4096
  QUALITY = 90
  EXTENSIONS = %w[.jpg .jpeg .png .bmp .tif .tiff .heic .heif .avif].freeze

  def self.run(root, dry_run: false)
    directory = File.join(root, "content", "media")
    raise "media directory is missing: #{directory}" unless File.directory?(directory)
    moves = {}
    Find.find(directory) do |path|
      next unless File.file?(path) && !File.symlink?(path) && EXTENSIONS.include?(File.extname(path).downcase)
      moves[path] = path.sub(/\.[^.]+\z/, ".webp")
    end
    SiteMedia.preflight(root, moves)
    mapping = moves.to_h { |from, to| [SiteMedia.url(root, from), SiteMedia.url(root, to)] }
    edits = SiteMedia.reference_edits(root, mapping)
    return puts("dry run: originals and references left unchanged") if dry_run
    Dir.mktmpdir("blog-webp-") do |temporary|
      replacements = {}
      snapshots = moves.keys.to_h { |path| [path, [File.size(path), File.mtime(path)]] }
      moves.each_key.with_index do |path, index|
        output = File.join(temporary, "#{index}.webp")
        frames, error, status = Open3.capture3(
          "magick", path, "-coalesce", "-auto-orient", "-resize", "#{MAX_EDGE}x#{MAX_EDGE}>",
          "-strip", "-quality", QUALITY.to_s, "-define", "webp:method=6",
          "-write", output, "-format", "%n\n", "info:"
        )
        raise "conversion failed for #{path}: #{error.strip}" unless status.success?
        dimensions, error, status = Open3.capture3("magick", "identify", "-format", "%m %w %h\n", output)
        raise "cannot verify #{output}: #{error.strip}" unless status.success?
        unless !dimensions.empty? && dimensions.lines.length == frames.lines.length &&
            dimensions.lines.all? { |line| format, width, height = line.split; format == "WEBP" && width.to_i.between?(1, MAX_EDGE) && height.to_i.between?(1, MAX_EDGE) }
          raise "invalid WebP output: #{path}"
        end
        replacements[path] = output
      end
      snapshots.each do |path, snapshot|
        raise "image changed during conversion: #{path}" unless [File.size(path), File.mtime(path)] == snapshot
      end
      SiteMedia.apply(root, moves, edits, replacements)
    end
    puts "WebP conversion complete"
  end
end

if $PROGRAM_NAME == __FILE__
  begin
    dry_run = false
    OptionParser.new { |options| options.on("--dry-run") { dry_run = true } }.parse!
    raise "unexpected arguments: #{ARGV.join(' ')}" unless ARGV.empty?
    ConvertWebp.run(File.expand_path("../..", __dir__), dry_run: dry_run)
  rescue StandardError => error
    warn "WebP conversion failed: #{error.message}"
    exit 1
  end
end
