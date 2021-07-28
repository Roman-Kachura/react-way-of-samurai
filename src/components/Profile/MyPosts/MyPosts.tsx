import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Posts";
import {addPostActionCreate, updateNewPostTextActionCreate} from "../../../Redux/profile-reducer";

type MyPostsPropsType = {
    posts: Array<any>,
    dispatch:any
}

type postElementType = {
    text:string,
    id:number,
    likesCount:number
}

const MyPosts = (props:MyPostsPropsType) => {
    let postsElemets = props.posts.map((p:postElementType) => {
        return <Post text={p.text} id={p.id} likesCount={p.likesCount} />;
    });

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = ()=>{
        props.dispatch(addPostActionCreate());
    }

    let updateNewPostText = ()=>{
        let text = newPostElement.current?.value;
        props.dispatch(updateNewPostTextActionCreate(text));
    }


    return <div>
        <h3>MyPosts</h3>
        <textarea placeholder='Add new post' ref={newPostElement} onChange={updateNewPostText}/>
        <button onClick={addPost}>Add post</button>
        <div>{postsElemets}</div>
    </div>;
};

export default MyPosts;
