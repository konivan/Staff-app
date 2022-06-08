import { StateItem, actionTypes } from './types';

export const increaseItem = (position: string, id: number) => ({
  type: actionTypes.STATE_INCREASE_ITEM,
  payload: {position, id}
})

export const searchItem = (value: string) => ({
  type: actionTypes.SEARCH_BY_POSITION_AND_DIVISION,
  payload: value,
})

export const changeItem = (name: string, bd: string, sex: string, position: string,  id: number, division?: string, supervisor?: string) => ({
  type: actionTypes.STATE_CHANGE_ITEM,
  payload: { name, bd, sex, position, id, division, supervisor}
})

export const deleteItem = (id: number) => ({
  type: actionTypes.STATE_DELETE_ITEM,
  payload: id,
})

export const addItem = (name: string, bd: string, sex: string, position :string, division?:string, supervisor?:string) => ({
  type: actionTypes.STATE_ADD_ITEM,
  payload: {name, bd, sex, position, division, supervisor},
})