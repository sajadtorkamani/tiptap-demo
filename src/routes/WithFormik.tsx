import React, { useRef } from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Dump from '../components/Dump'
import Toolbar from '../components/Toolbar'
import { Form, Formik, FormikProps } from 'formik'

interface EditorInput {
  text?: string
  html?: string
}

const WithFormik: React.FC = () => {
  const formikRef = useRef<FormikProps<EditorInput>>(null)

  const initialValues: EditorInput = {
    text: '',
    html: '',
  }

  const editor = useEditor({
    extensions: [StarterKit],
    content: initialValues.html,
    onUpdate: ({ editor }) => {
      formikRef.current?.setValues({
        text: editor.getText(),
        html: editor.getHTML(),
      })
    },
  })

  function handleSubmit(values: EditorInput) {
    console.log({ values })
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      innerRef={formikRef}
    >
      {({ values }: FormikProps<EditorInput>) => (
        <Form>
          <Toolbar editor={editor} />
          <EditorContent editor={editor} className="border border-black p-3" />

          <div className="mt-3">
            <Dump
              expanded
              title="Details"
              value={{
                text: editor?.getText(),
                html: editor?.getHTML(),
                formValues: values,
              }}
            />
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default WithFormik
