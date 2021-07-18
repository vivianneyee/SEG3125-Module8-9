import React from 'react';
import {ToastContainer, toast} from 'react-toastify'
import NavBar from "./components/navbar"
import Home from './components/home'
import Classes from './components/classes'
import Blog from './components/blog'
import Membership from './components/membership'
import 'react-toastify/dist/ReactToastify.css';
//import logo from './images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Classes/>
      <Blog/>
      <Membership/>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
