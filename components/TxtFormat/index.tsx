import { TextareaAutosize } from '@mui/material'
import style from './style.module.scss'
export default function TxtFormat() {
  return (
    <div>
      <TextareaAutosize
        aria-label="maximum height"
        className={style['textArea']}
        minRows={30}
        maxRows={30}
      />
    </div>
  )
}
