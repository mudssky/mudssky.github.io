import style from './style.module.scss'
import { Controlled as CodeMirror } from 'react-codemirror2'
// import { UnControlled as CodeMirror2 } from 'react-codemirror2'
import useHook, { Props } from './hooks'

export default function TxtFormat(props: Props) {
  const { txtConent, handleCodeMirrorContentChange } = useHook(props)
  // cons
  return (
    <div>
      <CodeMirror
        className={style['codemirror-container']}
        value={txtConent}
        options={{
          mode: 'text/plain',
          theme: 'material',
          lineNumbers: true,
          lineWrapping: true, //过长的行换行显示，适合小说
        }}
        onBeforeChange={handleCodeMirrorContentChange}
      />
    </div>
  )
}
