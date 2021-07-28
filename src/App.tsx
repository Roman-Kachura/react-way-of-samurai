import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type appPropsType = {

    store:{
        getState:any,
        dispatch:any
    }

}


function App(props:appPropsType) {
  return (
    <div className='wrapper'>
      <BrowserRouter>
          <Header/>
          <main>
              <Navbar/>
              <Route path='/dialogs'>
                  <DialogsContainer store={props.store}/>
              </Route>
              <Route path='/profile'>
                  <Profile store={props.store}/>
              </Route>
          </main>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
