import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {addPost, sendMessage} from "./Redux/state";



ReactDOM.render(
  <React.StrictMode>
          <App state={state} addPost={addPost} sendMessage={sendMessage}/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
