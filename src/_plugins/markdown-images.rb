require "kramdown"
require "kramdown-parser-gfm"
require "nokogiri"

module MarkdownImages
  KEY = "_markdown_image_paths"

  class UrlFilter
    include Jekyll::Filters::URLFilters

    def initialize(site)
      @context = Liquid::Context.new({}, {}, { site: site })
    end
  end

  module Filters
    include Jekyll::Filters::URLFilters

    def preview_inverts_in_dark(post)
      return false unless post["preview_image"]

      url = relative_url(post["preview_image"])
      fragment = Nokogiri::HTML5.fragment(post["content"].to_s, "UTF-8")
      fragment.css("img.invert-in-dark").any? { |image| image["src"] == url }
    end
  end

  def self.prepare(post)
    post.data[KEY] = []
    return unless post.content.match?(%r{(?:\]\(\s*|\]:\s*)<?/content/media/})

    # Parse Markdown, not tag-shaped text inside fenced code or raw HTML.
    nodes = [Kramdown::Document.new(post.content, input: "GFM").root]
    until nodes.empty?
      node = nodes.pop
      if node.type == :img && node.attr["src"]&.start_with?("/content/media/")
        post.data[KEY] << node.attr["src"]
      end
      nodes.concat(node.children)
    end
  end

  def self.rewrite(post)
    paths = post.data.delete(KEY)
    return if paths.nil? || paths.empty?

    fragment = Nokogiri::HTML5.fragment(post.content, "UTF-8")
    urls = UrlFilter.new(post.site)
    doodle = post.data["kind"] == "doodle"
    fragment.css("img").each do |image|
      next unless paths.include?(image["src"])

      image["src"] = urls.relative_url(image["src"])
      image["loading"] ||= "lazy"
      image["decoding"] ||= "async"
      image["class"] = [image["class"], "doodle-image"].compact.join(" ") if doodle
    end
    post.content = fragment.to_html
  end
end

Liquid::Template.register_filter(MarkdownImages::Filters)

Jekyll::Hooks.register(:posts, :pre_render) do |post, _payload|
  MarkdownImages.prepare(post)
end

Jekyll::Hooks.register(:posts, :post_convert) do |post|
  MarkdownImages.rewrite(post)
end
