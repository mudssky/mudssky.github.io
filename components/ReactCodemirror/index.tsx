import React from 'react'
import useHooks from './hooks'
export default function ReactCodeMirror() {
  const { codemirrorEditorDom } = useHooks()
  return <div ref={codemirrorEditorDom}></div>
}
