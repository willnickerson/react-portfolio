import React from 'react';
import PropTypes from 'prop-types';
import Scrollchor from 'react-scrollchor';
import downArrow from '../assets/svg/down-arrow.svg';
import { StyleSheet, css } from 'aphrodite';

const DownButton = props => {
  return (
    <div className={css(styles.downButton, styles.hover)}>
        <Scrollchor to={props.anchor} afterAnimate={props.stopRain} className={css(styles.notRed)}>
          <h4 className={css(styles.notRed, styles.text)}>{props.text}</h4>
          {props.arrowNotVisible ? 
            <img className={css(styles.downArrow, styles.notVisible)} src={downArrow} alt="#"/>
            : <img className={css(styles.downArrow)} src={downArrow} alt="#"/>}
        </Scrollchor>
    </div>
  );
};

DownButton.propTypes = {
  text: PropTypes.string.isRequired,
  anchor: PropTypes.string.isRequired,
  arrowNotVisible: PropTypes.bool
};

const styles = StyleSheet.create({
  downButton: {
    display: 'none',
    position: 'absolute',
    bottom: '0',
    textAlign: 'center',
    width: '100%',
    opacity: .7,
    transition: 'all .5s ease',
    fontSize: '1.5em',
    '@media (min-width: 600px)': {
      display: 'block'
    },
    ':hover h4': {
      opacity: 1
    }
  },
  downArrow: {
    height: '40px',
    width: '40px',
  },
  notRed: {
    ':hover': {
      color: 'white'
    }
  },
  text: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 'bold',
    opacity: 0,
    transition: 'all .5s ease'
  },
  hover: {
    ':hover': {
      opacity: 1,
      color: 'white'
    }
  },
  notVisible: {
    opacity: 0
  }
});

export default DownButton;
