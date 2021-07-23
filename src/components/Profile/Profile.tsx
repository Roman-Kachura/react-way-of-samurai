import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';

type profilePropsType = {
    posts: Array<any>,
    addPost:any
}

const Profile = (props:profilePropsType) => {
    return (
        <section className={s.profile}>
            <div>
                ava + description
            </div>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </section>
    );
};


export default Profile;