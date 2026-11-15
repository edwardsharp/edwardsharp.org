require "fileutils"
require "find"
require "pathname"
require "tempfile"
require "uri"

module SiteMedia
  TEXT_EXTENSIONS = %w[.md .html .liquid .json .xml .yml .yaml .css .scss .js .ts .svg .txt].freeze

  def self.text_files(root)
    files = Dir.children(root).map { |name| File.join(root, name) }.select do |path|
      File.file?(path) && !File.symlink?(path) && TEXT_EXTENSIONS.include?(File.extname(path))
    end
    %w[content src].each do |directory|
      base = File.join(root, directory)
      next unless File.directory?(base)
      Find.find(base) do |path|
        if File.symlink?(path) || File.basename(path).start_with?(".") || path == File.join(root, "src", "utilz")
          Find.prune if File.directory?(path)
          next
        end
        files << path if File.file?(path) && TEXT_EXTENSIONS.include?(File.extname(path))
      end
    end
    files
  end

  def self.url(root, path)
    "/#{Pathname.new(path).relative_path_from(Pathname.new(root))}"
  end

  def self.reference_edits(root, mapping, overrides = {})
    variants = mapping.dup
    mapping.each do |from, to|
      variants[URI::DEFAULT_PARSER.escape(from)] = URI::DEFAULT_PARSER.escape(to)
    end
    pattern = unless variants.empty?
      /(?:#{Regexp.union(variants.keys.sort_by { |key| -key.length }).source})(?=$|[\s"'<>()\[\]{},?#])/
    end
    text_files(root).each_with_object({}) do |path, edits|
      original = File.read(path, encoding: "UTF-8")
      raise "invalid UTF-8: #{path}" unless original.valid_encoding?
      updated = overrides.fetch(path, original)
      updated = updated.gsub(pattern) { |match| variants.fetch(match) } if pattern
      edits[path] = [original, updated] if updated != original
    end
  end

  def self.preflight(root, moves)
    targets = {}
    moves.each do |from, to|
      [from, to].each do |path|
        raise "path leaves the repository: #{path}" unless File.expand_path(path).start_with?("#{root}/")
        ancestor = path
        ancestor = File.dirname(ancestor) until File.exist?(ancestor) || File.symlink?(ancestor)
        actual = File.realpath(ancestor)
        base = File.realpath(root)
        raise "path follows a symlink outside the repository: #{path}" unless actual == base || actual.start_with?("#{base}/")
      end
      raise "source is missing or a symlink: #{from}" unless File.file?(from) && !File.symlink?(from)
      raise "destination already exists: #{to}" if File.exist?(to) || File.symlink?(to)
      raise "multiple files would become #{to}" if targets.key?(to)
      targets[to] = from
    end
  end

  def self.apply(root, moves, edits, replacements = {})
    preflight(root, moves)
    snapshots = moves.keys.to_h do |path|
      stat = File.stat(path)
      [path, [stat.ino, stat.size, stat.mtime]]
    end
    edits.each do |path, (original, _)|
      raise "file changed during preparation: #{path}" unless File.read(path, encoding: "UTF-8") == original
    end
    # Keep originals until every new file and reference is in place.
    moves.each do |from, to|
      FileUtils.mkdir_p(File.dirname(to))
      File.open(to, "wx", File.stat(from).mode & 0o777) do |file|
        if edits.key?(from)
          file.write(edits.fetch(from).last)
        else
          IO.copy_stream(replacements.fetch(from, from), file)
        end
      end
    end
    edits.each do |path, (_, updated)|
      next if moves.key?(path)
      Tempfile.create([".media-edit-", ".tmp"], File.dirname(path)) do |file|
        file.write(updated)
        file.chmod(File.stat(path).mode & 0o777)
        file.close
        raise "file changed during migration: #{path}" unless File.read(path, encoding: "UTF-8") == edits.fetch(path).first
        File.rename(file.path, path)
      end
    end
    moves.each_key do |path|
      stat = File.stat(path)
      raise "source changed during migration: #{path}" unless [stat.ino, stat.size, stat.mtime] == snapshots.fetch(path)
      if edits.key?(path) && File.read(path, encoding: "UTF-8") != edits.fetch(path).first
        raise "post changed during migration: #{path}"
      end
    end
    moves.each_key { |path| File.unlink(path) }
  end
end
