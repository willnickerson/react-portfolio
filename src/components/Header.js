import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Nav from './Nav';


class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasBackground: false
    };
  }


  render() {
    return (
      <div id="Header" className={css(styles.header, styles.headerBigPhone)}>
        <Nav/>
        <ul className={css(styles.socials)}>
          <li className={css(styles.socialItem)}>
            <a target="_blank" href="https://www.linkedin.com/in/william-nickerson-439976103/"><span className="icon-linkedin"></span></a>
          </li>
          <li className={css(styles.socialItem)}>
            <a target="_blank" href="https://github.com/willnickerson"><span className="icon-github"></span></a>
          </li>
        </ul>
        <div className="Clearfix"/>
      </div>
    ); 
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    position: 'fixed',
    top: 0,
    zIndex: 1000,
    background: '-webkit-linear-gradient(rgba(34,34,34,.8), rgba(34,34,34,0))',
    background: '-o-linear-gradient(rgba(34,34,34,.8), rgba(34,34,34,0))', 
    background: '-moz-linear-gradient(rgba(34,34,34,.8), rgba(34,34,34,0))', 
    background: 'linear-gradient(rgba(34,34,34,.8), rgba(34,34,34,0))'
  },
  socials: {
    float: 'right',
    fontSize: '1.3em',
    color: 'white',
    margin: '6%',
    position: 'relative',
    '@media (min-width: 600px)': {
      margin: '3%'
    },
    zIndex: 1001
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

export default Header;
