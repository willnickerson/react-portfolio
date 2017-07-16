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
    marginTop: '40%',

    '@media (min-width: 350px)': {
      width: '50%',
      marginTop: '38%'
    },
    '@media (min-width: 600px)': {
      width: '22%',
      marginTop: '20%' 
    },
    '@media (min-width: 700px)': {
      width: '20%',
      marginTop: '20%' 
    },
    '@media (min-width: 850px)': {
      marginTop: '15%'
    },
    '@media (min-width: 960px)': {
      width: '18%',
    },
    '@media (min-width: 1050px)': {
      width: '18%',
      marginTop: '12%'
    },
    '@media (min-width: 1150px)': {
      width: '15%'
    },
  },
  logoBigPhone: {
  }
});
