import React from "react";
import DialogsItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";

export type DialogsPropsType = {
    state:{
        dialogs:Array<object>
        messages:Array<object>

    },
    newMessageText:string
    updateNewMessageText:any
    sendMessage:any
}

const Dialogs = (props:DialogsPropsType) => {
    let dialogsElements = props.state.dialogs.map((d:any) => {
        return <DialogsItem name={d.name} id={d.id} />;
    });
    let messagesElements = props.state.messages.map((m: any) => {
        return <Message message={m.message} id={m.id} />;
    });

    let body = React.createRef<HTMLTextAreaElement>();

    let onChange = ()=>{
        props.updateNewMessageText(body);
    }

    return (
        <section className={s.dialogs}>
            <article className={s.dialogs_name}>{dialogsElements}</article>

            <article className={s.dialogs_messages}>
                <div>{messagesElements}</div>
                <textarea placeholder='New message' ref={body} onChange={onChange} value={props.newMessageText}/>
                <button onClick={props.sendMessage}>send</button>
            </article>
        </section>
    );
};

export default Dialogs;
