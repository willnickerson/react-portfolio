import React from 'react';
import Rain from './Rain';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/svg/wn-cup-logo.svg';
import DownButton from './DownButton';

export default function Landing(props) {
  return (
    <div id="Landing" className={css(styles.landingPage)}>
      <div className={css(styles.cupContainer)}>
         <img src={logo} className={css(styles.logo)} alt="#" /> 
         {/* <Rain/>  */}
      </div>
       <DownButton text="" anchor="#About"/>  
    </div>
  );
}


const styles = StyleSheet.create({
  landingPage: {
    height: '100vh',
    position: 'relative',
    overflow: 'hidden'
  },
  cupContainer: {
    marginTop: '25vh',
    marginBottom: '26vh',
    height: '48vh',
    '@media (min-width: 600px)': {
      height: '55vh'
    } 
  },
  logo: {
    height: '90%'
  }
});
