import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, sendMessage} from "./Redux/state";

type rerenderEntireTreeType = {
    messages: Array<object>,
    posts:Array<object>,
    dialogs:Array<object>
}
export let rerenderEntireTree = (props: rerenderEntireTreeType)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={props} addPost={addPost} sendMessage={sendMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


