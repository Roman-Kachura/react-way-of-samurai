type stateType = {
        posts:Array<any>,
        updateNewPostText:string
}

const profileReducer = (state:stateType, action:any)=>{
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