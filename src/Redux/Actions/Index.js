import {ADD_TODO} from '../Constants/ActionsTypes'

export function addTodo(payload) {
    return { type: ADD_TODO, payload }
  };