import React from 'react'
import { Editor } from '@tiptap/react'
import ToolbarButton from './ToolbarButton'

interface Props {
  editor: Editor | null
}

const Toolbar: React.FC<Props> = ({ editor }) => {
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

export default Toolbar
