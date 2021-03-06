import { Dispatch, SetStateAction } from "react";

export enum actionTypes {
  STATE_INCREASE_ITEM = 'STATE_INCREASE_ITEM',
  SEARCH_BY_POSITION_AND_DIVISION = 'SEARCH_BY_POSITION_AND_DIVISION',
  STATE_CHANGE_ITEM = 'STATE_CHANGE_ITEM',
  STATE_DELETE_ITEM = 'STATE_DELETE_ITEM',
  STATE_ADD_ITEM = 'STATE_ADD_ITEM',
}

interface StateAddItemPayload {
  id: number,
}

interface StateIncreaseItem {
  type: actionTypes.STATE_INCREASE_ITEM,
  payload: string,
}

interface SearchContent {
  type: actionTypes.SEARCH_BY_POSITION_AND_DIVISION,
  payload: string,
}

interface StateChangeItem {
  type: actionTypes.STATE_CHANGE_ITEM,
  payload: any,
}

interface StateDeleteItem {
  type: actionTypes.STATE_DELETE_ITEM,
  payload: number,
}

interface StateAddItem {
  type: actionTypes.STATE_ADD_ITEM,
  payload: any,
}

export type TypeActionState = StateIncreaseItem | SearchContent | StateChangeItem | StateAddItem | StateDeleteItem;

export interface StateItem {
  name: string,
  birth_date: string,
  sex: string,
  position: string,
  _id: number,
  supervisor_name?: string,
  subdivision_title?: string,
}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>