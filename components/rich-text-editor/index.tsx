"use client";

import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import MenuBar from "./menu-bar";
import Link from "@tiptap/extension-link";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export default function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: { class: "list-disc ml-3" },
        },
        orderedList: {
          HTMLAttributes: { class: "list-decimal ml-3" },
        },
      }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Link.configure({
        HTMLAttributes: { class: "text-blue-600 underline" },
        openOnClick: false,
        autolink: true,
        linkOnPaste: true,
      }),
      Highlight,
    ],
    content,
    editorProps: {
      attributes: {
        class: "min-h-[156px] border rounded py-2 px-3",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // 🔁 Update editor content if `content` prop changes
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content, false); // `false` avoids pushing to history
    }
  }, [content, editor]);

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
