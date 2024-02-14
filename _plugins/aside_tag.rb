module Jekyll
    class RenderAsideTag < Liquid::Tag
  
      def initialize(tag_name, text, tokens)
        super
        @text = text.strip
      end
  
      def render(context)
        "<aside class='aside'>#{@text}</aside>"
      end
    end
  end
  
  Liquid::Template.register_tag('aside', Jekyll::RenderAsideTag)