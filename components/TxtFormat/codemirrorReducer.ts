interface State {
  txtConent: string
}
export const initialState: State = {
  txtConent: '',
}

type actionType = 'setTxtConent'

interface Action {
  type: actionType
  payload: any
}

export const codemirrorReducer = (state: State, action: Action): State => {
  const newstate = { ...state }
  switch (action.type) {
    case 'setTxtConent':
      newstate.txtConent = action.payload
      return newstate
    default:
      throw new Error('not match actions')
  }
}

export function setTxtConent(val: any): Action {
  return {
    type: 'setTxtConent',
    payload: val,
  }
}
