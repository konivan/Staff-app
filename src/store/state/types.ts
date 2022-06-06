import { Dispatch, SetStateAction } from "react";

export enum actionTypes {
  STATE_INCREASE_ITEM = 'STATE_INCREASE_ITEM',
  STATE_DECREASE_ITEM = 'STATE_DECREASE_ITEM',
  SEARCH_CONTENT = 'SEARCH_CONTENT',
  SORT_BY_POSITION = 'SORT_BY_POSITION',
}

interface StateAddItemPayload {
  id: number,
}

interface StateIncreaseItem {
  type: actionTypes.STATE_INCREASE_ITEM,
  payload: StateAddItemPayload,
}

interface StateDecreaseItem {
  type: actionTypes.STATE_DECREASE_ITEM,
  payload: StateAddItemPayload,
}

interface SearchContent {
  type: actionTypes.SEARCH_CONTENT,
  payload: string,
}

export type TypeActionState = StateIncreaseItem | StateDecreaseItem | SearchContent;

export interface StateItem {
  name: string,
  birth_date: string,
  sex: string,
  position: string,
  _id: string,
  supervisor_name?: string,
  subdivision_title?: string,
}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>