import React from 'react';
import logo from './black-coffee-cup.svg';
import './App.css';
import Rain from './components/Rain';


export default function App(props) {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Rain/>
    </div>
  );
}

