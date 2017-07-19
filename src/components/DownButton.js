import React from 'react';
import PropTypes from 'prop-types';
import Scrollchor from 'react-scrollchor';
import downArrow from '../assets/images/down-arrow.svg';
import { StyleSheet, css } from 'aphrodite';

const DownButton = props => {
  return (
    <div className={css(styles.downButton, styles.hover)}>
        <Scrollchor to={props.anchor} afterAnimate={props.stopRain}>
          <h4>{props.text}</h4>
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
    paddingBottom: '44px',
    '@media (min-width: 450px)': {
      paddingBottom: 0
    },
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
    width: '100%',
    opacity: .7,
    fontSize: '1em',
  },
  downArrow: {
    height: '40px',
    width: '40px'
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
