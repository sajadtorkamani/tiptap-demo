import React from 'react'
import { Editor, EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import classNames from 'classnames'
import Dump from '../components/Dump'
import ToolbarButton from '../components/ToolbarButton'

const BasicExample: React.FC = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
  })

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="border border-black p-3" />

      <div className="mt-3">
        <Dump
          expanded
          title="Details"
          value={{
            text: editor?.getText(),
            html: editor?.getHTML(),
          }}
        />
      </div>
    </div>
  )
}

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null
  }

  return (
    <nav className="bg-gray-200 p-2 mb-4">
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        isActive={editor.isActive('bold')}
      >
        bold
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        isActive={editor.isActive('italic')}
      >
        italic
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        isActive={editor.isActive('strike')}
      >
        strike
      </ToolbarButton>
    </nav>
  )
}

export default BasicExample
