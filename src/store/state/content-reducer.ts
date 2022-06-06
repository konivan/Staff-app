import { actionTypes, StateItem, TypeActionState } from './types';

const initialState: StateItem[] = [
  {
    name: "Kondratev Ivan Andreevich",
    birth_date: '12.09.2003',
    sex: 'male',
    position: 'director',
    _id: 'qwerty',
  },
  {
    name: "Ivanovskiy Nikita Ryslanovich",
    birth_date: '10.08.2003',
    sex: 'male',
    position: 'department head',
    _id: 'asdfg',
    subdivision_title: 'Technological',
  },
];

export const contentReducer = (state = initialState, action: TypeActionState) => {
  switch (action.type) {
    case actionTypes.STATE_INCREASE_ITEM: {
      return state;
    }
    case actionTypes.STATE_DELETE_ITEM: {
      return state;
    }
    case actionTypes.STATE_ADD_ITEM: {
      return state;
    }
    case actionTypes.STATE_CHANGE_ITEM: {
      return state;
    }
    case actionTypes.SEARCH_BY_POSITION_AND_DIVISION: {
      if (action.payload !== '') {
        return state.filter(state => state.name.toLowerCase().includes(action.payload.toLowerCase()));
      } else return state;
    }
    default:
      return state;
  }
}