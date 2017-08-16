import React from 'react';
import DownButton from './DownButton';
import Rain from './Rain';
import { StyleSheet, css } from 'aphrodite';

export default function About(props) {
  return (
    <div className={`${css(styles.about)} Page`} id="About">
      <p className={css(styles.aboutText)}>I am a full-stack JavaScript developer living in Portland, OR. I design and build web applications with the MEAN/MERN stack.</p>
      <Rain/>
      <DownButton text="Projects" anchor="#Projects"/>
    </div>
  );
}

const styles = StyleSheet.create({
  about: {
    width: '100%'
  },
  aboutText: {
    fontSize: '1.3em',
    width: '90%',
    fontWeight: 100,
    margin: '0 auto 30px auto',
    '@media (min-width: 360px)': {
      fontSize: '1.5em',
      width: '80%'
    },
    '@media (min-width: 600px)': {
      lineHeight: '45px',
      fontSize: '1.8em',
      width: '80%'
    },
    '@media (min-width: 950px)': {
      width: '70%',
      marginTop: '50px'
    },
  }
});