import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../Hooks/useTypeSelector';
import EmployeeCard from '../EmployeeCard/Employee';
import './Main.css';

const Main:FC = () => {

  const content = useTypeSelector(state => state.content);
  const dispatch = useDispatch();

  return (
    <div className='main'>
      <button className='main-add-button btn-2'>Добавить сотрудника</button>
      <div className='main-content'>
        {content.map((item) => (
          <EmployeeCard item={item} key={item._id}/>
        ))}
      </div>
    </div>
  );
};

export default Main;