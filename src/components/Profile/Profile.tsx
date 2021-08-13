import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type profileStateType = {
    state:{
        profile:any
    },

    linkUrl:any
}

const Profile = (props:profileStateType) => {
    // console.log(props.state.profile);
    return (
        <section className={s.profile}>
            <ProfileInfo profile={props.state.profile} linkUrl={props.linkUrl}/>
            <MyPostsContainer/>
        </section>
    );
};


export default Profile;