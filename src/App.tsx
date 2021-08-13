import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileAPIContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
          <HeaderContainer/>
          <main>
              <Navbar/>
              <Route path='/dialogs'>
                  <DialogsContainer/>
              </Route>
              <Route path='/profile/:userId?'>
                  <ProfileContainer/>
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
