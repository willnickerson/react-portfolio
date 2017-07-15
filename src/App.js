import React from 'react';
import './App.css';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import { StyleSheet, css } from 'aphrodite';


export default function App(props) {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <hr className={css(styles.pageBreak)}/>
      <About/>
      <hr className={css(styles.pageBreak)}/>
      <Projects/>
      <hr className={css(styles.pageBreak)}/>
      <Contact/>
    </div>
  );
}

const styles = StyleSheet.create({
  pageBreak: {
    width: '70%',
    border: 'none',
    margin: '40px auto',
    height: '1px',
    backgroundColor: 'white'
  }
});




