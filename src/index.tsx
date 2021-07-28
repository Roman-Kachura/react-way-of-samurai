import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store";

let rerenderEntireTree = ()=>{
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree();
store.subscribe(rerenderEntireTree);
reportWebVitals();
