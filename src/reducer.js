
const defaultState = {
  list: ['hello', 'world', 'React'],
  inputValue: '2222'
}

export default (state = defaultState, action) => {
  console.log('state:', state, 'action', action)
  let newstate = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'handle_input_change':
      newstate.inputValue = action.value
      return newstate
    case 'handle_button_click':
      newstate.list.push(newstate.inputValue);
      newstate.inputValue = ''
      console.log(newstate)
      return newstate
    case 'handle_item_click':
      newstate.list.splice(action.index, 1)
      return newstate
    default:
      return state
  }

}