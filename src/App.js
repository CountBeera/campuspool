import './App.css';
// import {useEffect} from "react";
import {getDatabase , ref , set} from "firebase/database";
import {app} from "./firebase.js" ;
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from "firebase/auth";
import LoginPage from './components/Login/Login';
import Home from './pages/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import {LoginPage} from "carpool\src\components\Login\Login.jsx"
import { setUserId } from 'firebase/analytics';
import React, { useState, useEffect } from 'react';
import CreateRide from './pages/CreateRide/CreateRide';
import LookRide from './pages/LookRide/LookRide';
import YourRide from './pages/YourRide/YourRide';
import 'firebase/auth';
import 'firebase/firestore';

const db = getDatabase(app);

export const auth=getAuth(app);

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const[user,setUser] = useState(null);
  useEffect(()=> {

    onAuthStateChanged(auth,user =>{
      if(user){
        console.log('Hello',user);
        setUser(user);

      }else{
        console.log("You are logged out");
        setUser(null);
      }
    })
  },[])

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home theme={theme} setTheme={setTheme} user={user} />}/>
          <Route exact path='/login' element={<LoginPage theme={theme} setTheme={setTheme} user={user} />}/>
          <Route exact path='/create-ride' element={<CreateRide theme={theme} setTheme={setTheme} user={user} />}/>
          <Route exact path='/find-ride' element={<LookRide theme={theme} setTheme={setTheme} user={user} />}/>
          <Route exact path='/my-ride' element={<YourRide theme={theme} setTheme={setTheme} user={user} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;