import React from 'react';
import s from './Header.module.css';
// import  from './logo.png';

const Header = ()=>{
    return(<header className={s.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' />
    </header>);
}

export default Header;