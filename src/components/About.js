import React from 'react';
import DownButton from './DownButton';
import Rain from './Rain';
import { StyleSheet, css } from 'aphrodite';

export default function About(props) {
  return (
    <div className={`${css(styles.about)} Page`} id="About">
      <p className={css(styles.aboutText)}>Hi! My name is Will and I am a full-stack JavaScript developer living in Portland, OR.</p>
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
    fontSize: '1.5em',
    margin: '0 auto 30px auto',
    width: '100%',
    fontWeight: '100',

    '@media (min-width: 360px)': {
      fontSize: '1.8em',
      width: '80%'
    },
    '@media (min-width: 600px)': {
      fontSize: '2.1em',
      width: '80%'
    }
  }
});