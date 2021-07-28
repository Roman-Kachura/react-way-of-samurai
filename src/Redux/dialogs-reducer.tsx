type stateType = {
    messages:Array<any>,
    dialogs:Array<any>,
    updateNewMessageText:string
}

let initialState = {
    messages: [
        { id: 1, message: "hey 1" },
        { id: 2, message: "hey 2" },
        { id: 3, message: "hey 3" },
        { id: 4, message: "hey 4" },
        { id: 5, message: "hey 5" },
        { id: 6, message: "hey 6" },
    ],

    dialogs: [
        { id: 1, name: "Sveta" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Dima" },
        { id: 4, name: "Vitalya" },
        { id: 5, name: "Roma" },
        { id: 6, name: "Kolya" },
    ],

    updateNewMessageText:''
}

const dialogReducer = (state:stateType = initialState, action:any)=>{
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