import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import NavBar from "./components/navbar"
import Home from './components/home'
import Classes from './components/classes'
//import logo from './images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Home/>
        <Classes/>
      </header>
    </div>
  );
}

export default App;
