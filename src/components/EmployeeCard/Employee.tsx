import React, { FC } from 'react';
import { StateItem } from '../../store/state/types';
import './Employee.css';
import { deleteItem, increaseItem } from '../../store/state/actions';
import { useDispatch } from 'react-redux';

interface Props {
  item: StateItem,
}

const Employee:FC<Props> = ({item}) => {

  const dispatch = useDispatch();

  const removeHandler = (item :string) => {
    dispatch(deleteItem(item))
  }

  const increaseHandler = (item :string) => {
    dispatch(increaseItem(item))
  }

  return (
    <div className='card'>
      <div className='card-info'>
        <span>ФИО: </span>{item.name}<br></br>
        <span>Дата рождения: </span>{item.birth_date}<br></br>
        <span>Пол: </span>{item.sex}<br></br>
        <span>Должность: </span>{item.position}<br></br>
        {item.subdivision_title !== undefined ? <span><span>Отдел: </span>{item.subdivision_title}</span> : null}
        {item.supervisor_name !== undefined ? <span><span>Руководитель: </span>{item.supervisor_name}</span> : null}
      </div>
      <button className='delete-btn' onClick={() => removeHandler(item._id)}>
        Удалить
      </button>
      <button className='change-btn'>Изменить</button>
      <button className='increase-btn' onClick={() => increaseHandler(item._id)}>Повысить</button>
    </div>
  );
};

export default Employee;