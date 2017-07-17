import React from 'react';
import DownButton from './DownButton';
import { StyleSheet, css } from 'aphrodite';

export default function About(props) {
  return (
    <div className="About Page" id="About">
      <p className={css(styles.aboutText)}>Hi! My name is Will and I am a full-stack JavaScript developer living in Portland, OR.</p>
      <DownButton text="Projects" anchor="#Projects"/>
    </div>
  );
}

const styles = StyleSheet.create({
  aboutText: {
    fontSize: '1.7em',
    margin: '0 auto 0 auto',
    width: '100%',
    fontFamily: '"Mister Pixel", sans-serif',

    '@media (min-width: 360px)': {
      fontSize: '2em',
      width: '90%'
    }
  }
});