import { useEffect, useRef } from 'react'
import CodeMirror from 'codemirror'
interface Props {
  value?: string //文本内容
}
export default function useHooks() {
  const codemirrorEditorDom = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const myCodeMirror = CodeMirror(document.body, {
      value: 'function myScript(){return 100;}\n',
      mode: 'javascript',
      lineNumbers: true,
    })
    return () => {}
  }, [])

  return { codemirrorEditorDom }
}
