import { useReducer } from 'react'
import {
  codemirrorReducer,
  initialState,
  setTxtConent,
} from './codemirrorReducer'
interface Action {
  type: string
  payload: any
}
interface MenuItem {
  title: string
  link: string
}
export interface Props {
  // menuList: MenuItem[]
  // menuTitle: string
  className?: string
}

export default function useHook(props: Props) {
  const [codemirrorState, codemirrorDispatch] = useReducer(
    codemirrorReducer,
    initialState
  )
  const { txtConent } = codemirrorState
  const handleCodeMirrorContentChange = (
    editor: any,
    data: any,
    value: any
  ) => {
    codemirrorDispatch(setTxtConent(value))
  }
  return {
    txtConent,
    handleCodeMirrorContentChange,
  }
}
