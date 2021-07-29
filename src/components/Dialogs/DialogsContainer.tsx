import React from "react";
import {
    sendMessageActionCreate,
    updateNewMessageTextActionCreate,
} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state:any)=>{
    return {
        state:state.DialogsPage
    }
}

const mapDispatchToProps = (dispatch:any)=>{
    return{
        sendMessage: ()=>{
            dispatch(sendMessageActionCreate());
        },
        updateNewMessageText:(body:any)=>{
            let text = body.current?.value;
            dispatch(updateNewMessageTextActionCreate(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
