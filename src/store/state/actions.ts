import { StateItem, actionTypes } from './types';

export const searchContent = (value: string) => ({
  type: actionTypes.SEARCH_CONTENT,
  payload: value,
})