import React from "react";
import s from "../Dialogs.module.css";

const Message = (props: { message:string, id:number }) => {
    return(<div>
        <p>{props.message}</p>
    </div>);
};

export default Message;
