import React from 'react';
import DownButton from './DownButton';
import { StyleSheet, css } from 'aphrodite';

export default function About(props) {
  return (
    <div className="About Page" id="About">
      <p className={css(styles.aboutText)}>Hi! My name is Will and I am a full-stack JavaScript developer living in Portland, OR.</p>
      {/* <img src={logo} className={css(styles.logo)} alt="#" /> */}
      <DownButton text="Projects" anchor="#Projects"/>
    </div>
  );
}

const styles = StyleSheet.create({
  aboutText: {
    fontSize: '1.5em',
    margin: '0 auto 30px auto',
    width: '100%',
    fontWeight: '100',

    '@media (min-width: 360px)': {
      fontSize: '1.8em',
      width: '90%'
    }
  }
});