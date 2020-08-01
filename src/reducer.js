import { HANDLE_INPUT_CHANGE, HANDLE_BUTTON_CLICK, HANDLE_ITEM_CLICK } from './actionTypes'




const defaultState = {
  list: ['hello', 'world', 'React'],
  inputValue: '2222'
}

export default (state = defaultState, action) => {
  console.log('state:', state, 'action', action)
  let newstate = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case HANDLE_INPUT_CHANGE:
      newstate.inputValue = action.value
      return newstate
    case HANDLE_BUTTON_CLICK:
      newstate.list.push(newstate.inputValue);
      newstate.inputValue = ''
      console.log(newstate)
      return newstate
    case HANDLE_ITEM_CLICK:
      newstate.list.splice(action.index, 1)
      return newstate
    default:
      return state
  }

}