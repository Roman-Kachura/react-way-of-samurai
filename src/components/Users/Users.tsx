import React from "react";
import s from './Users.module.css';
import usersPhoto from './../../source/user_img.jpg';

type statePropsType = {
    state:{
        totalUsersCount:number,
        pageSize:number,
        currentPage:number,
        users:Array<object>
    },

    unfollow:any,
    follow:any,
    clickBtn:any
}


const Users = (props:statePropsType) => {
    const numbersPages = Math.ceil(props.state.totalUsersCount /props.state.pageSize);

    let pages = [];
    for (let i = 1; i <= numbersPages; i++) {
        pages.push(i);
    }

    let usersElem = props.state.users.map((u: any) => {
        return (
            <article key={u.id} className={s.usersItem}>
                <div className={s.usersPhoto}>
                    <img src={u.photoUrl || usersPhoto} alt={'userPhoto'}/>
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

        let pagesElem = pages.map(p => {
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