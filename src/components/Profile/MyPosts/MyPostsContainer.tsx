import React from "react";
import {addPostActionCreate, updateNewPostTextActionCreate} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

type MyPostsContainerType = {
        getState: any,
        dispatch: any
}


const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store: MyPostsContainerType) => {
                let state = store.getState().ProfilePage;

                let addPost = () => {
                    store.dispatch(addPostActionCreate());
                }

                let updateNewPostText = (body: any) => {
                    let text = body.current?.value;
                    store.dispatch(updateNewPostTextActionCreate(text));
                }

                return (<MyPosts state={state} updateNewPostText={updateNewPostText} addPost={addPost}/>);
            }
        }
    </StoreContext.Consumer>

};

export default MyPostsContainer;
