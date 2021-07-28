import React from "react";
import {
    sendMessageActionCreate,
    updateNewMessageTextActionCreate,
} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type dialogsContainerType = {
    store: {
        getState:any,
        dispatch:any
    }
}

const DialogsContainer = (props:dialogsContainerType) => {
    let state = props.store.getState().DialogsPage;

    let updateNewMessageText = (body:any)=>{
        let text = body.current?.value;
        props.store.dispatch(updateNewMessageTextActionCreate(text));
    }

    let sendMessage = ()=>{
        props.store.dispatch(sendMessageActionCreate());
    }

    return (<Dialogs state={state} sendMessage={sendMessage} updateNewMessageText={updateNewMessageText}/>);
};

export default DialogsContainer;
