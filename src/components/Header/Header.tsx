import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type stateType = {
    state:{login:any,email:any,id:any},
    setUserAuthorized:any
}

const Header = (props:any)=>{

    return(<header className={s.header}>
        <img alt = '' src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' />
        <div className={s.loginBlock}>
            {props.state.isAuth ? props.state.login : <NavLink to='/login'>{'Login'}</NavLink>}

        </div>
    </header>);
}

export default Header;