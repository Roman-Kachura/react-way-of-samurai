import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>

            <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            <NavLink to='/dialogs' activeClassName={s.active}>Message</NavLink>


            <a href="#">News</a>

            <a href="#">Music</a>

            <a href="#">Settings</a>

        </nav>
    );
};

export default Navbar;
