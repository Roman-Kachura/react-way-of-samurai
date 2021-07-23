import React from "react";

const Post = (props:any) => {
    return (
        <div>
            <h5>{props.text}</h5>
            <p>{"Likes: " + props.likesCount}</p>
        </div>
    );
};

export default Post;
