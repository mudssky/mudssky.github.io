import { useReducer } from 'react'

interface Action {
  type: string
  payload: any
}
interface MenuItem {
  title: string
  link: string
}
export interface Props {
  menuList: MenuItem[]
  menuTitle: string
  className?: string
}

interface State {
  txtConent: string
}
const initialState: State = {
  txtConent: '',
}
const ACTION_TYPE = {
  setTxtConent: 'setTxtConent',
}
const reducer = (state: State, action: Action): State => {
  const newstate = { ...state }
  switch (action.type) {
    case ACTION_TYPE.setTxtConent:
      newstate.txtConent = action.payload
      return newstate
    default:
      throw new Error('not match actions')
  }
}
export default function useHook() {
  const [state, dispatch] = useReducer(reducer, initialState)
}
