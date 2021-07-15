import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import NavBar from "./components/navbar"
//import logo from './images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
