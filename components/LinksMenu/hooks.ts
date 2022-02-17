import { useReducer, useRef } from 'react'

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
  isMenuOpen: boolean
}
const initialState: State = {
  isMenuOpen: false,
}
const ACTION_TYPE = {
  setIsMenuOpen: 'setIsMenuOpen',
}
const reducer = (state: State, action: Action): State => {
  const newstate = { ...state }
  switch (action.type) {
    case ACTION_TYPE.setIsMenuOpen:
      newstate.isMenuOpen = action.payload
      return newstate
    default:
      throw new Error('not match actions')
  }
}

const setIsMenuOpen = (isMenuOpen: boolean): Action => ({
  type: 'setIsMenuOpen',
  payload: isMenuOpen,
})
export default function useHook(props: Props) {
  const { menuList, menuTitle } = props
  const [state, dispatch] = useReducer(reducer, initialState)
  const { isMenuOpen } = state
  const buttonDom = useRef<any>(null)
  const handleMenuOpen = async () => {
    console.log('open menu', menuTitle)
    dispatch(setIsMenuOpen(true))
  }
  const handleMenuClose = async () => {
    console.log('close menu', menuTitle)
    dispatch(setIsMenuOpen(false))
  }
  return {
    buttonDom,
    isMenuOpen,
    menuList,
    menuTitle,
    handleMenuOpen,
    handleMenuClose,
  }
}
