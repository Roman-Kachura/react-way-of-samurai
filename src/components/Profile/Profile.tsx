import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css';

type profilePropsType = {
    store:{
        dispatch:any,
        getState:any
    }
}

const Profile = (props:profilePropsType) => {
    return (
        <section className={s.profile}>
            <div>
                ava + description
            </div>
            <MyPostsContainer store={props.store}/>
        </section>
    );
};


export default Profile;