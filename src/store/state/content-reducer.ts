import { actionTypes, StateItem, TypeActionState } from './types';

const initialState: StateItem[] = [
  {
    name: "Ivan",
    birth_date: '12.09.2003',
    sex: 'male',
    position: 'director',
    _id: 'qwerty',

  },
];

export const contentReducer = (state = initialState, action: TypeActionState) => {
  switch (action.type) {

    default:
      return state;
  }
}