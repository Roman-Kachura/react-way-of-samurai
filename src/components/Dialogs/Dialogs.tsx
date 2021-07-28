import React from "react";
import DialogsItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import {
    sendMessageActionCreate,
    updateNewMessageTextActionCreate,
} from "../../Redux/dialogs-reducer";

type DialogsPropsType = {
    dialogs: Array<any>,
    messages: Array<any>,
    dispatch:any
}

type DialogType = {
    name:string,
    id:number
}

type messageType = {
    message:string,
    id:number
}

const Dialogs = (props:DialogsPropsType) => {
    let dialogsElements = props.dialogs.map((d:DialogType) => {
        return <DialogsItem name={d.name} id={d.id} />;
    });
    let messagesElements = props.messages.map((m: messageType) => {
        return <Message message={m.message} id={m.id} />;
    });

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    let updateNewMessageText = ()=>{
        let text = newMessageElement.current?.value;
        props.dispatch(updateNewMessageTextActionCreate(text));
    }

    let sendMessage = ()=>{
        props.dispatch(sendMessageActionCreate());
    }

    return (
        <section className={s.dialogs}>
            <article className={s.dialogs_name}>{dialogsElements}</article>

            <article className={s.dialogs_messages}>
                <div>{messagesElements}</div>
                <textarea placeholder='New message' ref={newMessageElement} onChange={updateNewMessageText}/>
                <button onClick={sendMessage}>send</button>
            </article>
        </section>
    );
};

export default Dialogs;
