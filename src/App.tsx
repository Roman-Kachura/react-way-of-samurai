import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
          <Header/>
          <main>
              <Navbar/>
              <Route path='/dialogs'>
                  <DialogsContainer/>
              </Route>
              <Route path='/profile'>
                  <Profile/>
              </Route>

              <Route path='/users'>
                <UsersContainer/>
              </Route>
          </main>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
