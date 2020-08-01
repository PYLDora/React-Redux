import { HANDLE_INPUT_CHANGE, HANDLE_BUTTON_CLICK, HANDLE_ITEM_CLICK, INIT_DATA_ACTIONS } from './actionTypes'
import axios from 'axios'

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

export const initDataAction = (value) => ({
  type: INIT_DATA_ACTIONS,
  value
})

export const initData = () => {
  return dispatch => {
    //这里做异步的操作

    axios.get('/api').then((res) => {
      console.log(res)
      const action = initDataAction(res.data)
      dispatch(action)
    })
  }
}