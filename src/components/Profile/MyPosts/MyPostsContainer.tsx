import React from "react";
import {addPostActionCreate, updateNewPostTextActionCreate} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state:any)=>{
    return {
        state:state.ProfilePage
    }
}

const mapDispatchToProps = (dispatch:any)=>{
    return {
        updateNewPostText:(text:any)=>{
            dispatch(updateNewPostTextActionCreate(text));
        },

        addPost:()=>{
            dispatch(addPostActionCreate());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
