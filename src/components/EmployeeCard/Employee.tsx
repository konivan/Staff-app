import React, { FC, useState } from 'react';
import { StateItem } from '../../store/state/types';
import './Employee.css';
import { changeItem, deleteItem, increaseItem } from '../../store/state/actions';
import { useDispatch } from 'react-redux';

interface Props {
  item: StateItem,
}

const Employee:FC<Props> = ({item}) => {

  const dispatch = useDispatch();
  const [changes, setChanges] = useState(false);
  const [name, setName] = useState('');

  const removeHandler = (item :number) => {
    dispatch(deleteItem(item));
  }

  const increaseHandler = (position:string, id:number) => {
    dispatch(increaseItem(position, id));
  }

  const changeHandler = (name: string, id: number) => {
    setChanges(!changes);
    dispatch(changeItem(name, id))
  }

  const changeName = (event: any) => {
    setName(event.target.value);
  }

  return (
    <div className='card'>
      <div className='card-info'>
        <span>ФИО: </span>{changes === true ? <input onChange={changeName} placeholder={item.name}></input> : <span>{item.name}</span>}<br></br>
        <span>Дата рождения: </span>{item.birth_date}<br></br>
        <span>Пол: </span>{item.sex}<br></br>
        <span>Должность: </span>{item.position}<br></br>
        {item.subdivision_title !== undefined ? <span><span>Отдел: </span>{item.subdivision_title}</span> : null}
        {item.supervisor_name !== undefined ? <span><span>Руководитель: </span>{item.supervisor_name}</span> : null}
      </div>
      <button className='delete-btn' onClick={() => removeHandler(item._id)}>
        Удалить
      </button>
      <button className='change-btn' onClick={() => changeHandler(name, item._id)}>{changes === false ? 'Изменить' : 'Готово'}</button>
      <button className='increase-btn' onClick={() => increaseHandler(item.position, item._id)}>Повысить</button>
    </div>
  );
};

export default Employee;