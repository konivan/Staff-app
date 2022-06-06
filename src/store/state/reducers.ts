import { actionTypes, StateItem, TypeActionState } from "./types"

const initialState: StateItem[] = [];

export const stateReducer = (state = initialState, action: TypeActionState) => {
  switch (action.type) {

    default:
      return state;
  }
}