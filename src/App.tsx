import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

type appPropsType = {
    store:{
        getState:any,
    }
        dispatch:any
}


function App(props:appPropsType) {
  return (
    <div className='wrapper'>
      <BrowserRouter>
          <Header/>
          <main>
              <Navbar/>
              <Route path='/dialogs'>
                  <Dialogs dialogs={props.store.getState().DialogsPage.dialogs} messages={props.store.getState().DialogsPage.messages} dispatch={props.dispatch}/>
              </Route>
              <Route path='/profile'>
                  <Profile posts={props.store.getState().ProfilePage.posts} dispatch={props.dispatch}/>
              </Route>
          </main>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
