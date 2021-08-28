import React from "react";
import {
    sendMessageActionCreate,
    updateNewMessageTextActionCreate,
} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../Redux/redux-store";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state:StateType)=>{
    return {
        state:state.DialogsPage,
        newMessageText: state.DialogsPage.newMessageText,
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

const mapStateToPropsAuthRedirect = (state: StateType) => {
    return {isAuth:state.AuthPage.isAuth}
}

const DialogsContainer:any = compose(
    connect(mapStateToProps,mapDispatchToProps),
    connect(mapStateToPropsAuthRedirect),
    withAuthRedirect
)(Dialogs);

export default DialogsContainer;

