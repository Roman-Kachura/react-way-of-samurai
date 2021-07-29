import React from "react";
import {
    sendMessageActionCreate,
    updateNewMessageTextActionCreate,
} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

type dialogsContainerType = {
        getState:any,
        dispatch:any
}

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store:dialogsContainerType) => {
                let state = store.getState().DialogsPage;

                let updateNewMessageText = (body:any)=>{
                    let text = body.current?.value;
                    store.dispatch(updateNewMessageTextActionCreate(text));
                }

                let sendMessage = ()=>{
                    store.dispatch(sendMessageActionCreate());
                }

                return (<Dialogs state={state} sendMessage={sendMessage} updateNewMessageText={updateNewMessageText}/>);
            }
        }
        </StoreContext.Consumer>
};

export default DialogsContainer;
