import React from 'react'
import { Editor, EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import classNames from 'classnames'
import Dump from '../components/Dump'

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

  const buttonClasses = 'border px-2 py-1 border-black mr-3'

  return (
    <nav className="bg-gray-200 p-2 mb-4">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={classNames(
          buttonClasses,
          editor.isActive('bold') ? 'is-active' : ''
        )}
      >
        bold
      </button>

      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={classNames(
          buttonClasses,
          editor.isActive('italic') ? 'is-active' : ''
        )}
      >
        italic
      </button>

      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={classNames(
          buttonClasses,
          editor.isActive('strike') ? 'is-active' : ''
        )}
      >
        strike
      </button>
    </nav>
  )
}

export default BasicExample
