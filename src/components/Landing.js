import React from 'react';
import logo from '../black-coffee-cup.svg';
import Rain from './Rain';
import { StyleSheet, css } from 'aphrodite';

export default function Landing(props) {
  return (
    <div id="Landing" className={css(styles.landingPage)}>
      <img src={logo} className={css(styles.logo)} alt="#" />
      <Rain/>
    </div>
  );
}


const styles = StyleSheet.create({
  landingPage: {
    height: '100vh',
    position: 'relative',
    overflow: 'hidden'
  },

  logo: {
    width: '45%',
    marginTop: '40%'
  }
});
