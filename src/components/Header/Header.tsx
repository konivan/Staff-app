import React, { FC } from 'react';
import './Header.css';

const Header:FC = () => {
  return (
    <header className='header'>
      <form className='header-form'>
        <input className='header-input'
        placeholder='Поиск по должности или подразделению'
        type='search'/>
      </form>
    </header>
  );
};

export default Header;