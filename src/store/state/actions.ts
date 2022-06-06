import { StateItem, actionTypes } from './types';

export const increaseItem = (id: string) => ({
  type: actionTypes.STATE_INCREASE_ITEM,
  payload: id,
})

export const searchItem = (value: string) => ({
  type: actionTypes.SEARCH_BY_POSITION_AND_DIVISION,
  payload: value,
})

export const changeItem = (item: StateItem) => ({
  type: actionTypes.STATE_CHANGE_ITEM,
  payload: item,
})

export const deleteItem = (id: string) => ({
  type: actionTypes.STATE_DELETE_ITEM,
  payload: id,
})

export const addItem = (newItem: Object) => ({
  type: actionTypes.STATE_ADD_ITEM,
  payload: newItem,
})