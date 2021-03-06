import {profileAPI} from "../API/API";

const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type ProfileStateType = {
        posts:Array<PostType>,
        newPostText:string,
        profile:any
}

type PostType = {
    id:number
    text:string
    likesCount:number
}

let initialState = {
    posts: [
        { id: 1, text: "post 1", likesCount: 1 },
        { id: 2, text: "post 2", likesCount: 2 },
        { id: 3, text: "post 3", likesCount: 3 },
        { id: 4, text: "post 4", likesCount: 4 },
    ],
    newPostText:'',
    profile:null
}

const profileReducer = (state:ProfileStateType = initialState, action:any)=>{
    switch (action.type){
        case 'ADD-POST':{
            return {
                ...state,
                posts:[...state.posts, {id:state.posts.length + 1, text:state.newPostText,likesCount:0}],
                newPostText: ''
            };
        }

        case 'UPDATE-NEW-POST-TEXT':{
            return {
                ...state,
                newPostText: action.text
            };
        }

        case SET_USER_PROFILE:{
            return{
                ...state,
                profile:action.profile
            }
        }
        default: return  state;
    }
}

export const setUserProfile = (profile:any) => ({type:SET_USER_PROFILE, profile});

export const addPostActionCreate = ()=> ({type:'ADD-POST'});
export const getUserProfile = (userId:number)=> (dispatch:any)=>{
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        })
};
export const updateNewPostTextActionCreate = (newText:any)=>{
    return {
        type:'UPDATE-NEW-POST-TEXT',
        text:newText
    }
}

export default profileReducer;