import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../Hooks/useTypeSelector';
import EmployeeCard from '../EmployeeCard/Employee';
import { StateItem } from '../../store/state/types';
import './Main.css';
import { addItem } from '../../store/state/actions';

const Main:FC = () => {

  const content = useTypeSelector(state => state.content);
  const dispatch = useDispatch();
  const [bdValue, setbdValue] = useState('');
  const [sexValue, setsexValue] = useState('');
  const [positionValue, setpositionValue] = useState('');
  const [divisionValue, setdivisionValue] = useState('');
  const [supervisorValue, setsupervisorValue] = useState('');
  const [nameValue, setnameValue] = useState('');

  const addHandler = (name: string, bd: string, sex: string, position :string, division?:string, supervisor?:string) => {
    if (name && bd && sex && position !== null) {
      dispatch(addItem(name, bd, sex, position, division, supervisor));
    } else alert('Заполните поля!');
      setbdValue('');
      setdivisionValue('');
      setnameValue('');
      setsexValue('');
      setpositionValue('');
      setsupervisorValue('');
  }

  function handleChangeName(event: any) {
    setnameValue(event.target.value);
  }

  function handleChangeBd(event: any) {
    setbdValue(event.target.value);
  }

  function handleChangeSex(event: any) {
    setsexValue(event.target.value);
  }

  function handleChangePosition(event: any) {
    setpositionValue(event.target.value);
  }

  function handleChangeDvision(event: any) {
    setdivisionValue(event.target.value);
  }

  function handleChangeSupervisor(event: any) {
    setsupervisorValue(event.target.value);
  }

  return (
    <>
      <div className="main-card">
        <div className="main-card-info">
          <span>ФИО: </span>
          <input value={nameValue} onChange={handleChangeName}></input>
          <br></br>
          <span>Дата рождения: </span>
          <input value={bdValue} onChange={handleChangeBd}></input>
          <br></br>
          <span>Пол: </span>
          <input value={sexValue} onChange={handleChangeSex}></input>
          <br></br>
          <span>Должность: </span>
          <input value={positionValue} onChange={handleChangePosition}></input>
          <br></br>
          <span>Отдел(если есть): </span>
          <input value={divisionValue} onChange={handleChangeDvision}></input>
          <br></br>
          <span>Руководитель(если есть): </span>
          <input
            value={supervisorValue}
            onChange={handleChangeSupervisor}></input>
          <br></br>
        </div>
        <button
          className="main-add-button"
          onClick={() =>
            addHandler(nameValue, bdValue, sexValue, positionValue, divisionValue, supervisorValue)
          }
        >
          Добавить сотрудника
        </button>
      </div>
      <div className="main">
        <div className="main-content">
          {content.map((item) => (
            <EmployeeCard item={item} key={item._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;