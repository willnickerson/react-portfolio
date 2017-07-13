import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Nav from './Nav';


export default function Header(props) {
  return (
    <div className={css(styles.header)}>
      <Nav/>
      <ul className={css(styles.socials)}>
        <li className={css(styles.socialItem)}>
          <span className="icon-linkedin"></span>
        </li>
        <li className={css(styles.socialItem)}>
          <span className="icon-github"></span>
        </li>
      </ul>
      <div className="Clearfix"/>
    </div>
  ); 
}

const styles = StyleSheet.create({
  header: {
    height: '20vh',
    width: '100%',
    position: 'fixed',
    top: 0,
    zIndex: 1000
  },
  socials: {
    float: 'right',
    fontSize: '1.2em',
    color: 'white',
    margin: '6%'
  },
  socialItem: {
    display: 'inline-block',
    marginLeft: '15px',
  }
});
