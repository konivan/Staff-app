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
  const [name, setName] = useState(item.name);
  const [bd, setBd] = useState(item.birth_date);
  const [sex, setSex] = useState(item.sex);
  const [position, setPosition] = useState(item.position);
  const [division, setDivision] = useState(item.subdivision_title);
  const [supervisor, setsupervisor] = useState(item.supervisor_name);


  const removeHandler = (item: number) => {
    dispatch(deleteItem(item));
  }

  const increaseHandler = (position: string, id: number) => {
    dispatch(increaseItem(position, id));
  }

  const changeHandler = (
    name: string,
    bd: string,
    sex: string,
    position: string,
    id: number,
    division?: string,
    supervisor?: string,
  ) => {
    setChanges(!changes);
    dispatch(changeItem(name, bd, sex, position, id, division, supervisor));
  };

  const changeName = (event: any) => {
    setName(event.target.value);
  }

  const changeBd = (event: any) => {
    setBd(event.target.value);
  }

  const changeSex = (event: any) => {
    setSex(event.target.value);
  }

  const changePosition = (event: any) => {
    setPosition(event.target.value);
  }

  const changeDivision = (event: any) => {
    setDivision(event.target.value);
  }

  const changeSupervisor = (event: any) => {
    setsupervisor(event.target.value);
  }

  return (
    <div className="card">
      <div className="card-info">
        <span>ФИО: </span>
        {changes === true ? (
          <input
            className="change-input"
            onChange={changeName}
            placeholder={item.name}></input>) : (<span>{item.name}</span>)}<br></br>
        <span>Дата рождения: </span>
        {changes === true ? (
          <input
            className="change-input"
            onChange={changeBd}
            placeholder={item.birth_date}></input>) : (<span>{item.birth_date}</span>)}<br></br>
        <span>Пол: </span>
        {changes === true ? (
          <input
            className="change-input"
            onChange={changeSex}
            placeholder={item.sex}></input>) : (<span>{item.sex}</span>)}<br></br>
        <span>Должность: </span>
        {changes === true ? (
          <input
            className="change-input"
            onChange={changePosition}
            placeholder={item.position}></input>) : (<span>{item.position}</span>)}<br></br>
        {item.subdivision_title !== undefined ? (
          <span>
            <span>{item.subdivision_title === '' ? null : 'Отдел:'}</span>
            {changes === true ? (
              <input
                className="change-input"
                onChange={changeDivision}
                placeholder={item.subdivision_title}></input>) : (<span>{item.subdivision_title}</span>)}
          </span>) : null}<br></br>
        {item.supervisor_name !== undefined ? (
          <span>
            <span>{item.supervisor_name === '' ? null : 'Руководитель: '}</span>
            {changes === true ? (
              <input
                className="change-input"
                onChange={changeSupervisor}
                placeholder={item.supervisor_name}></input>) : (<span>{item.supervisor_name}</span>)}
          </span>) : null}
      </div>
      <button className="delete-btn" onClick={() => removeHandler(item._id)}>
        Удалить
      </button>
      <button
        className="change-btn"
        onClick={() =>
          changeHandler(name, bd, sex, position, item._id, division, supervisor)}>
        {changes === false ? "Изменить" : "Готово"}
      </button>
      <button
        className="increase-btn"
        onClick={() => increaseHandler(item.position, item._id)}
      >
        Повысить
      </button>
    </div>
  );
};

export default Employee;