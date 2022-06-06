import React, { FC } from 'react';
import { StateItem } from '../../store/state/types';
import './Employee.css';

interface Props {
  item: StateItem,
}

const Employee:FC<Props> = ({item}) => {
  return (
    <div className='card'>
      <div className='card-info'>
        <span>ФИО: </span>{item.name}<br></br>
        <span>Дата рождения: </span>{item.birth_date}<br></br>
        <span>Пол: </span>{item.sex}<br></br>
        <span>Должность: </span>{item.position}<br></br>
        {item.subdivision_title !== undefined ? <span><span>Отдел: </span>{item.subdivision_title}</span> : null}
      </div>
    </div>
  );
};

export default Employee;