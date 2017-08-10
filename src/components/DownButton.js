import React from 'react';
import PropTypes from 'prop-types';
import Scrollchor from 'react-scrollchor';
import downArrow from '../assets/images/down-arrow.svg';
import { StyleSheet, css } from 'aphrodite';

const DownButton = props => {
  return (
    <div className={css(styles.downButton, styles.hover)}>
        <Scrollchor to={props.anchor} afterAnimate={props.stopRain}>
          <h4 className={css(styles.notRed)}>{props.text}</h4>
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
    fontWeight: 'bold',
    position: 'absolute',
    bottom: '25px',
    textAlign: 'center',
    width: '100%',
    opacity: .5,
    lineHeight: '120%',
    fontSize: '1.5em',
    letterSpacing: '2px',
    '@media (min-width: 600px)': {
      display: 'block'
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
