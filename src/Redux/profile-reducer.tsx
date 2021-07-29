type stateType = {
        posts:Array<any>,
        updateNewPostText:string
}

let initialState = {
    posts: [
        { id: 1, text: "post 1", likesCount: 1 },
        { id: 2, text: "post 2", likesCount: 2 },
        { id: 3, text: "post 3", likesCount: 3 },
        { id: 4, text: "post 4", likesCount: 4 },
    ],

    updateNewPostText:''
}

const profileReducer = (state:stateType = initialState, action:any)=>{
    switch (action.type){
        case 'ADD-POST':
            let newPost = {
                id:state.posts.length + 1,
                text:state.updateNewPostText,
                likesCount:0
            }
            state.posts.push(newPost);
            state.updateNewPostText = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.updateNewPostText = action.text;
            return state;
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