import React from 'react';
import logo from '../black-coffee-cup.svg';
import Rain from './Rain';

export default function Landing(props) {
  return (
    <div id="Landing">
      <img src={logo} className="App-logo" alt="logo" />
      <Rain/>
    </div>
  );
}