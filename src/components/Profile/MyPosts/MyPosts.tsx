import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Posts";

type MyPostsPropsType = {
    state: {
        posts: Array<object>
    }

    addPost: any,
    updateNewPostText: any
}


const MyPosts = (props: MyPostsPropsType) => {
    let postsElemets = props.state.posts.map((p: any) => {
        return <Post text={p.text} id={p.id} likesCount={p.likesCount}/>;
    });

    let body = React.createRef<HTMLTextAreaElement>();

    const onChange = () => {
        let text = body.current?.value;
        props.updateNewPostText(text);
    }

    const addPost = ()=>{
        props.addPost();
    }


    return <div>
        <h3>MyPosts</h3>
        <textarea placeholder='Add new post' ref={body} onChange={onChange}/>
        <button onClick={addPost}>Add post</button>
        <div>{postsElemets}</div>
    </div>;
};

export default MyPosts;
