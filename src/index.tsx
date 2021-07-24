import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./Redux/state";
import {rerenderEntireTree} from "./render";


console.log(state);
rerenderEntireTree(state);
reportWebVitals();
