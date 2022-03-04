import { TextareaAutosize } from '@mui/material'
import style from './style.module.scss'
import { Controlled as CodeMirror } from 'react-codemirror2'
import useHook, { Props } from './hooks'
export default function TxtFormat(props: Props) {
  const { txtConent } = useHook(props)
  // cons
  return (
    <div>
      <CodeMirror
        value={txtConent}
        options={{
          mode: 'xml',
          theme: 'material',
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {
          // this.setState({ value })
        }}
        onChange={(editor, data, value) => {}}
      />
    </div>
  )
}
