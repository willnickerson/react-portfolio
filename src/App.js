import React from 'react';
import './App.css';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';


export default function App(props) {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}




