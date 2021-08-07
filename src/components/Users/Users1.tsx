import React from "react";
import s from './Users.module.css';
import axios from "axios";
import usersPhoto from './../../source/user_img.jpg';
const Users1 = (props:any)=>{
    const loadUsers = ()=>{
        if(props.state.users.length === 0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response =>{
                let users = response.data.items;
                props.setUsers(users);
            });
        }
    }

    let userElem = props.state.users.map((u:any) =>{
        return (<article key={u.id} className={s.usersItem}>
            <div className={s.usersPhoto}>
                <img src={u.photoUrl || usersPhoto}/>
                {u.followed
                    ? <button onClick={()=> props.unfollow(u.id)}>Unfollow</button>
                    :<button onClick={()=> props.follow(u.id)}>Follow</button>
                }
            </div>

            <div className={s.usersInfo}>
                <div className={s.usersName}>{u.name}</div>
                <div className={s.usersLocation}>{'u.location.country'}, {'u.location.city'}</div>
                <div className={s.usersStatus}>{u.status || 'Enter status'}</div>
            </div>
        </article>)
    })
    return(<section className={s.users}>{userElem }<button className={s.loadUsers} onClick={loadUsers}>Click</button></section>)
}

export default Users1;