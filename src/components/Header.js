import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Nav from './Nav';


export default function Header(props) {
  return (
    <div className={css(styles.header, styles.headerBigPhone)}>
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
    width: '100%',
    position: 'fixed',
    top: 0,
    zIndex: 1000,
  },
  socials: {
    float: 'right',
    fontSize: '1.3em',
    color: 'white',
    margin: '6%',
    '@media (min-width: 600px)': {
      margin: '3%'
    }
  },
  socialItem: {
    display: 'inline-block',
    marginLeft: '15px',
    transition: 'all .35s ease',
    ':hover': {
      color: '#FF2800'
    }
  }
});
