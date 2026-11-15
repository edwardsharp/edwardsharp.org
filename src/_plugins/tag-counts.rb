require "json"
require "open3"

module JournalTagCounts
  class Generator < Jekyll::Generator
    priority :low

    def generate(site)
      tags = site.posts.docs.map { |post| post.data.fetch("tags", []) }
      # Use the browser's counter so Unicode casing and separators cannot drift.
      output, errors, status = Open3.capture3(
        "node", File.join(site.source, "src/ts/tag-counts.ts"),
        stdin_data: JSON.generate(tags), binmode: true
      )
      unless status.success?
        raise Jekyll::Errors::FatalException, "tag counting failed: #{errors}"
      end
      Jekyll.logger.warn("tag counts:", errors.strip) unless errors.strip.empty?
      counts = JSON.parse(output.force_encoding(Encoding::UTF_8))
      unless counts.is_a?(Hash) && counts.values.all? { |count| count.is_a?(Integer) && count >= 0 }
        raise Jekyll::Errors::FatalException, "invalid tag counts"
      end

      site.data["post_tag_counts"] = counts
      site.posts.docs.each do |post|
        if post.data.fetch("tags", []).any? { |tag| @counts.nil? || @counts[tag] != counts[tag] }
          site.regenerator.force(post.path)
        end
      end
      @counts = counts
    end
  end

  module Filters
    def post_tag_count(tag)
      @context.registers[:site].data.fetch("post_tag_counts").fetch(tag)
    end
  end
end

Liquid::Template.register_filter(JournalTagCounts::Filters)
