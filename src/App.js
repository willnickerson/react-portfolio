import React from 'react';
import logo from './black-coffee-cup.svg';
import './App.css';
import Rain from './components/Rain';


export default function App(props) {
  return (
    <div className="App">
      <div className="Page">
        <img src={logo} className="App-logo" alt="logo" />
        <Rain/>
      </div>
      <div className="Page" id="home">
        <h1>Home</h1>
      </div>
      <div className="Page">
        <h1>Projects</h1>
      </div>
    </div>
  );
}

