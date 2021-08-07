type stateType = {
        posts:Array<any>,
        newPostText:string
}

let initialState = {
    posts: [
        { id: 1, text: "post 1", likesCount: 1 },
        { id: 2, text: "post 2", likesCount: 2 },
        { id: 3, text: "post 3", likesCount: 3 },
        { id: 4, text: "post 4", likesCount: 4 },
    ],

    newPostText:''
}

const profileReducer = (state:stateType = initialState, action:any)=>{
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
        default: return  state;
    }
}

export const addPostActionCreate = ()=> ({type:'ADD-POST'});
export const updateNewPostTextActionCreate = (newText:any)=>{
    return {
        type:'UPDATE-NEW-POST-TEXT',
        text:newText
    }
}

export default profileReducer;