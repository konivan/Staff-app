import { actionTypes, StateItem, TypeActionState } from './types';

const initialState: StateItem[] = [
  {
    name: "Кондратьев Иван Андреевич",
    birth_date: '12.09.1990',
    sex: 'мужской',
    position: 'директор',
    _id: 0,
  },
  {
    name: "Ивановский Никита Русланович",
    birth_date: '10.10.1993',
    sex: 'мужской',
    position: 'руководитель подразделения',
    _id: 1,
    subdivision_title: 'Технологический',
  },
  {
    name: "Малаев Никита Георгевич",
    birth_date: '01.01.1970',
    sex: 'мужской',
    position: 'руководитель подразделения',
    _id: 2,
    subdivision_title: 'Исскуственного интеллекта',
  },
  {
    name: "Пименова Светлана Викторовна",
    birth_date: '10.08.2001',
    sex: 'женский',
    position: 'контролер',
    _id: 3,
  },
  {
    name: "Сиянский Александр Анотольевич",
    birth_date: '12.09.1992',
    sex: 'мужской',
    position: 'рабочий',
    _id: 4,
    supervisor_name: 'Ивановский Никита Русланович',
  },
  {
    name: "Иванов Иван Иванович",
    birth_date: '10.08.1994',
    sex: 'мужской',
    position: 'контролер',
    _id: 5,
  },
  {
    name: "Дроздов Артём Михайлович",
    birth_date: '12.09.2001',
    sex: 'мужской',
    position: 'рабочий',
    _id: 6,
    supervisor_name: 'Малаев Никита Георгевич',
  },
  {
    name: "Грачёв Роман Артёмович",
    birth_date: '12.09.1999',
    sex: 'мужской',
    position: 'рабочий',
    _id: 7,
    supervisor_name: 'Малаев Никита Георгевич',
  },
  {
    name: "Рябова Анастасия Валерьевна",
    birth_date: '12.09.1992',
    sex: 'женский',
    position: 'рабочий',
    _id: 8,
    supervisor_name: 'Ивановский Никита Русланович',
  },
  {
    name: "Михайлова Елена Павловна",
    birth_date: '12.09.1995',
    sex: 'женский',
    position: 'рабочий',
    _id: 9,
    supervisor_name: 'Малаев Никита Георгевич',
  },
  {
    name: "Глушко Ольга Дмитриевна",
    birth_date: '12.09.2002',
    sex: 'женский',
    position: 'рабочий',
    _id: 10,
    supervisor_name: 'Малаев Никита Георгевич',
  },
  {
    name: "Галета Игорь Владимирович",
    birth_date: '12.09.1997',
    sex: 'мужской',
    position: 'рабочий',
    _id: 11,
    supervisor_name: 'Ивановский Никита Русланович',
  },
  {
    name: "Ткаченко Мария Борисовна",
    birth_date: '10.08.1985',
    sex: 'женский',
    position: 'контролер',
    _id: 12,
  },
  {
    name: "Васильев Александр Алексеевич",
    birth_date: '10.08.2000',
    sex: 'мужской',
    position: 'контролер',
    _id: 13,
  },
];


export const contentReducer = (state = initialState, action: TypeActionState) => {
  switch (action.type) {
    case actionTypes.STATE_INCREASE_ITEM: {
      const newState = [...state];
      let { position, id }: any = action.payload;
      if (position === "рабочий") {
        newState[id].position = "контролер";
        return newState;
      } else if (position === "контролер") {
        newState[id].position = "руководитель подразделения";
        return newState;
      } else if (position === "руководитель подразделения") {
        newState[id].position = "директор";
        return newState;
      } else return state;
    }
    case actionTypes.STATE_DELETE_ITEM: {
      return state.filter((item) => item._id !== action.payload);
    }
    case actionTypes.STATE_ADD_ITEM: {
      const state1 = [...state];
      let { name, bd, sex, position, division, supervisor }:any = action.payload;

      let newItem = {
        name: name,
        birth_date: bd,
        sex: sex,
        position: position,
        subdivision_title: division,
        supervisor_name: supervisor,
        _id: state.length,
      }
      state1.unshift(newItem);
      return state1;
    }
    case actionTypes.STATE_CHANGE_ITEM: {
      let { name, id, bd, sex, position, division, supervisor} = action.payload;
      state[id].name = name;
      state[id].birth_date = bd;
      state[id].sex = sex;
      state[id].position = position;
      state[id].subdivision_title = division;
      state[id].supervisor_name = supervisor;
      return state;
    }
    case actionTypes.SEARCH_BY_POSITION_AND_DIVISION: {
      if (action.payload !== "") {
        return state.filter((state) =>
          state.position.toLowerCase().includes(action.payload.toLowerCase())
        );
      } else return state;
    }
    default:
      return state;
  }
}