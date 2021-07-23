import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

type AppPropsType = {
    state: {
        posts: Array<object>,
        messages: Array<object>,
        dialogs:Array<object>
    }

    addPost:any,
    sendMessage:any
}

function App(props:AppPropsType) {
  return (
    <div className='wrapper'>
      <BrowserRouter>
          <Header/>
          <main>
              <Navbar/>
              <Route path='/dialogs'>
                  <Dialogs dialogs={props.state.dialogs} messages={props.state.messages} sendMessage={props.sendMessage}/>
              </Route>
              <Route path='/profile'>
                  <Profile posts={props.state.posts} addPost={props.addPost}/>
              </Route>
          </main>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
