import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Contact(props) {
  return (
    <div className="Page" id="Contact">
      <p className={css(styles.text)}>Want to work on a project? Want to say hi?</p>
      <a href="mailto:willnickersonpdx@gmail.com" className={css(styles.emailButton)}>
        Send me an Email
        <span className={css(styles.arrow, styles.arrowHover)}> &#8594;</span>
      </a>
      <footer className={css(styles.footer)}>
        <hr className={css(styles.hr)}/>
        <p className={css(styles.copywrite)}> &#169; Will Nickerson 2017 </p>
      </footer>
    </div>
  );
}

const styles = StyleSheet.create({
  text: {
    fontsize: '1.7em',
    fontWeight: 'bold',
    width: '80%',
    margin: '0 auto 30px auto'
  },
  emailButton: {
    border: '2px solid white',
    padding: '15px 20px',
    borderRadius: '5%',
    fontStyle: 'italic',
    marginTop: '25px'
  },
  arrow: {
    opacity: 0,
    transition: 'all .35s ease'
  },
  arrowHover: {
    ':hover': {
      opacity: 1
    }
  },
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: '10px',
    fontSize: '.75em',
  },
  copywrite: {
    marginTop: '25px',
    fontStyle: 'italic',
    color: 'rgba(255,255,255,.7)'
  },
  hr: {
    width: '80%',
    margin: 'auto',
    border: 'none',
    height: '1px',
    backgroundColor: 'rgba(255,255,255,.7)'
  }
});

