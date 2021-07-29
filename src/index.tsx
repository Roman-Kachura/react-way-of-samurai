import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store";
import StoreContext from "./StoreContext";

let rerenderEntireTree = ()=>{
    ReactDOM.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree();
store.subscribe(rerenderEntireTree);
reportWebVitals();
