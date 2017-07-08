import React from 'react';
import logo from './black-coffee-cup.svg';
import './App.css';
import Rain from './components/Rain';
import Header from './components/Header';


export default function App(props) {
  return (
    <div className="App">
      <Header/>
      <div id="Landing">
        <img src={logo} className="App-logo" alt="logo" />
        <Rain/>
      </div>
      <div className="Page" id="About">
          <h1>About</h1>
      </div>
      <div className="Page" id="Projects">
        <h1>Projects</h1>
      </div>
      <div className="Page" id="Contact">
        <h1>Contact</h1>
      </div>
    </div>
  );
}

