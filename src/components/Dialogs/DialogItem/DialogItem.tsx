import React from "react";
import {NavLink} from "react-router-dom";
import s from '../Dialogs.module.css';

const DialogsItem = (props:any) => {
    return (
        <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>
            <div className={s.dialogs_img}>
                <img src='https://pristor.ru/wp-content/uploads/2019/05/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B9-%D0%B0%D1%80%D1%82-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%B4%D0%BB%D1%8F-%D0%92%D0%9A004.jpg'/>
            </div>
            <div>{props.name}</div>
        </NavLink>
    );
};

export default DialogsItem;