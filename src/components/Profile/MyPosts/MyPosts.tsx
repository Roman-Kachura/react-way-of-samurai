import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Posts";

type MyPostsPropsType = {
    posts: Array<any>,
    addPost:any
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
        let text = newPostElement.current?.value;
        props.addPost(text);
    }


    return <div>
        <h3>MyPossts</h3>
        <textarea ref={newPostElement}>123</textarea>
        <button onClick={addPost}>Add post</button>
        <div>{postsElemets}</div>
    </div>;
};

export default MyPosts;
