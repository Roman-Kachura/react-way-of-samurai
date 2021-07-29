import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css';

const Profile = () => {
    return (
        <section className={s.profile}>
            <div>
                ava + description
            </div>
            <MyPostsContainer/>
        </section>
    );
};


export default Profile;