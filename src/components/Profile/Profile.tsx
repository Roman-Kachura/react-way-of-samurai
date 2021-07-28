import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';

type profilePropsType = {
        dispatch:any,
        posts: Array<any>,
}

const Profile = (props:profilePropsType) => {
    return (
        <section className={s.profile}>
            <div>
                ava + description
            </div>
            <MyPosts posts={props.posts} dispatch={props.dispatch}/>
        </section>
    );
};


export default Profile;