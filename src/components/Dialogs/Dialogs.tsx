import React from "react";
import DialogsItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";

type DialogsPropsType = {
    dialogs: Array<any>,
    messages: Array<any>,
    sendMessage:any
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

    let sendMessage = ()=>{
        let text = newMessageElement.current?.value;
        props.sendMessage(text);
    }

    return (
        <section className={s.dialogs}>
            <article className={s.dialogs_name}>{dialogsElements}</article>

            <article className={s.dialogs_messages}>
                <div>{messagesElements}</div>
                <textarea ref={newMessageElement}>123</textarea>
                <button onClick={sendMessage}>send</button>
            </article>
        </section>
    );
};

export default Dialogs;
