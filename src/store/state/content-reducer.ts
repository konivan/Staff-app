import { actionTypes, StateItem, TypeActionState } from './types';

const initialState: StateItem[] = [
  {
    name: "Кондратьев Иван Андреевич",
    birth_date: '12.09.1990',
    sex: 'мужской',
    position: 'директор',
    _id: 'qwerty',
  },
  {
    name: "Ивановский Никита Русланович",
    birth_date: '10.08.2003',
    sex: 'мужской',
    position: 'руководитель подразделения',
    _id: 'asdfg',
    subdivision_title: 'Технологический',
  },
  {
    name: "Малаев Никита Георгевич",
    birth_date: '12.09.2003',
    sex: 'мужской',
    position: 'руководитель подразделения',
    _id: 'yutyut',
    subdivision_title: 'Исскуственного интеллекта',
  },
  {
    name: "Пименова Светлана Викторовна",
    birth_date: '10.08.2001',
    sex: 'женский',
    position: 'контролер',
    _id: 'vxcvcxv',
  },
  {
    name: "Сиянский Александр Анотольевич",
    birth_date: '12.09.1992',
    sex: 'мужской',
    position: 'рабочий',
    _id: 'jujuju',
    supervisor_name: 'Ивановский Никита Русланович',
  },
  {
    name: "Иванов Иван Иванович",
    birth_date: '10.08.1994',
    sex: 'мужской',
    position: 'контролер',
    _id: 'cddcd',
  },
  {
    name: "Дроздов Артём Михайлович",
    birth_date: '12.09.2001',
    sex: 'мужской',
    position: 'рабочий',
    _id: 'sxsx',
    supervisor_name: 'Малаев Никита Георгевич',
  },
  {
    name: "Грачёв Роман Артёмович",
    birth_date: '12.09.1999',
    sex: 'мужской',
    position: 'рабочий',
    _id: 'zaazaz',
    supervisor_name: 'Малаев Никита Георгевич',
  },
  {
    name: "Рябова Анастасия Валерьевна",
    birth_date: '12.09.1992',
    sex: 'женский',
    position: 'рабочий',
    _id: 'dcdcc',
    supervisor_name: 'Ивановский Никита Русланович',
  },
  {
    name: "Михайлова Елена Павловна",
    birth_date: '12.09.1995',
    sex: 'женский',
    position: 'рабочий',
    _id: 'mmnnm',
    supervisor_name: 'Малаев Никита Георгевич',
  },
  {
    name: "Глушко Ольга Дмитриевна",
    birth_date: '12.09.2002',
    sex: 'женский',
    position: 'рабочий',
    _id: 'kikiki',
    supervisor_name: 'Малаев Никита Георгевич',
  },
  {
    name: "Галета Игорь Владимирович",
    birth_date: '12.09.1997',
    sex: 'мужской',
    position: 'рабочий',
    _id: 'aqqa',
    supervisor_name: 'Ивановский Никита Русланович',
  },
  {
    name: "Ткаченко Мария Борисовна",
    birth_date: '10.08.1985',
    sex: 'женский',
    position: 'контролер',
    _id: 'awrrwq',
  },
  {
    name: "Васильев Александр Алексеевич",
    birth_date: '10.08.2000',
    sex: 'мужской',
    position: 'контролер',
    _id: 'mnmnmnmnm',
  },
];

export const contentReducer = (state = initialState, action: TypeActionState) => {
  switch (action.type) {
    case actionTypes.STATE_INCREASE_ITEM: {
      if (action.payload !== '') {
      } else return state;
    }
    case actionTypes.STATE_DELETE_ITEM: {
      return state.filter(item => item._id !== action.payload);
    }
    case actionTypes.STATE_ADD_ITEM: {
      return state;
    }
    case actionTypes.STATE_CHANGE_ITEM: {
      return state;
    }
    case actionTypes.SEARCH_BY_POSITION_AND_DIVISION: {
      if (action.payload !== '') {
        return state.filter(state => state.position.toLowerCase().includes(action.payload.toLowerCase()));
      } else return state;
    }
    default:
      return state;
  }
}