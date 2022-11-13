import React from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Dump from '../components/Dump'
import Toolbar from '../components/Toolbar'

const BasicExample: React.FC = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
  })

  return (
    <div>
      <Toolbar editor={editor} />
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

export default BasicExample
