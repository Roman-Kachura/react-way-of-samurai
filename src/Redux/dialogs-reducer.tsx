type stateType = {
    messages:Array<any>,
    dialogs:Array<any>,
    newMessageText:string
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

    newMessageText:''
}

const dialogReducer = (state:stateType = initialState, action:any)=>{
    switch (action.type){
        case 'SEND-MESSAGE':
            return{
                ...state,
                messages:[...state.messages,{id:state.messages.length + 1,message:state.newMessageText}],
                newMessageText:''
            }
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return{...state, newMessageText:action.text};
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