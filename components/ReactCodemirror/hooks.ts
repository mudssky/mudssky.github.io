import { useEffect, useRef } from 'react'
import { EditorView, keymap } from '@codemirror/view'
import { defaultKeymap } from '@codemirror/commands'
import { EditorState } from '@codemirror/state'
interface Props {
  value?: string //文本内容
}
export default function useHooks() {
  const codemirrorEditorDom = useRef<any>(null)
  useEffect(() => {
    const startState = EditorState.create({
      doc: 'Hello World',
      extensions: [keymap.of(defaultKeymap)],
    })

    const view = new EditorView({
      state: startState,
      parent: codemirrorEditorDom.current,
    })

    return () => {
      view.destroy()
    }
  }, [])

  return { codemirrorEditorDom }
}
