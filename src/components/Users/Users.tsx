import React from "react";
import s from './Users.module.css';
import usersPhoto from './../../source/user_img.jpg';
import {NavLink} from "react-router-dom";

type statePropsType = {
    state:{
        totalUsersCount:number,
        pageSize:number,
        currentPage:number,
        users:Array<object>
    },

    unfollow:any,
    follow:any,
    clickBtn:any,
    buttonsShow:any
}


const Users = (props:statePropsType) => {
    let pages = props.buttonsShow();

    let usersElem = props.state.users.map((u: any) => {
        return (
            <article key={u.id} className={s.usersItem}>
                <div className={s.usersPhoto}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small === null ? usersPhoto : u.photos.small } alt={'userPhoto'}/>
                    </NavLink>

                    {u.followed
                        ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(u.id)}>Follow</button>
                    }
                </div>

                <div className={s.usersInfo}>
                    <div className={s.usersName}>{u.name}</div>
                    <div className={s.usersLocation}>{'u.location.country'}, {'u.location.city'}</div>
                    <div className={s.usersStatus}>{u.status || 'Enter status'}</div>
                </div>


            </article>
        );
    });

        let pagesElem = pages.map((p:number) => {
            return <button onClick={() => {
                props.clickBtn(p)
            }}
                           className={p === props.state.currentPage ? s.btnActive : s.btn}>
                {p}
            </button>
        });


        return (<section className={s.users}>{usersElem}<div className={s.btnsBlock}>{pagesElem}</div></section>)
}

export default Users;