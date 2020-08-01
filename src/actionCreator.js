import { HANDLE_INPUT_CHANGE, HANDLE_BUTTON_CLICK, HANDLE_ITEM_CLICK } from './actionTypes'

export const inputChangeAction = (value) => ({
  type: HANDLE_INPUT_CHANGE,
  value
})

export const buttonClickAction = () => ({
  type: HANDLE_BUTTON_CLICK
})

export const itemClickAction = (value) => ({
  type: HANDLE_ITEM_CLICK,
  index: value
})