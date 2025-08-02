import React from "react";
import DOMPurify from "isomorphic-dompurify";

interface HtmlContentProps {
  content: string;
}

export default function HtmlContent({ content }: HtmlContentProps) {
  const sanitizedContent = {
    __html: DOMPurify.sanitize(content, {
      ADD_TAGS: ["iframe"],
      ADD_ATTR: ["src", "width", "height", "allowfullscreen"],
      USE_PROFILES: { html: true },
    }),
  };

  return (
    <div
      className="prose prose-lg prose-stone text-container "
      dangerouslySetInnerHTML={sanitizedContent}
    />
  );
}
