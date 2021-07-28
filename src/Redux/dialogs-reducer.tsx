type stateType = {
    messages:Array<any>,
    dialogs:Array<any>,
    updateNewMessageText:string
}

const dialogReducer = (state:stateType, action:any)=>{
    switch (action.type){
        case 'SEND-MESSAGE':
            let newMessage = {
                id:state.messages.length + 1,
                message:state.updateNewMessageText
            }

            state.messages.push(newMessage);
            state.updateNewMessageText = '';
            return state;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.updateNewMessageText = action.text;
            return state;
        default: return state;
    }
}

export const sendMessageActionCreate = ()=>({type:'SEND-MESSAGE'});
export const updateNewMessageTextActionCreate = (newText:any)=>{
    return {
        type:'UPDATE-NEW-MESSAGE-TEXT',
        text:newText
    }
}

export default dialogReducer;