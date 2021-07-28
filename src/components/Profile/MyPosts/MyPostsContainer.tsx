import React from "react";
import {addPostActionCreate, updateNewPostTextActionCreate} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsContainerType = {
    store:{
        getState:any,
        dispatch:any
    }
}


const MyPostsContainer = (props:MyPostsContainerType) => {
    let state = props.store.getState().ProfilePage;

    let addPost = ()=>{
        props.store.dispatch(addPostActionCreate());
    }

    let updateNewPostText = (body:any)=>{
        let text = body.current?.value;
        props.store.dispatch(updateNewPostTextActionCreate(text));
    }


    return (<MyPosts state={state} updateNewPostText={updateNewPostText} addPost={addPost}/>);
};

export default MyPostsContainer;
