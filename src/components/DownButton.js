import React from 'react';
import PropTypes from 'prop-types';
import Scrollchor from 'react-scrollchor';
import downArrow from '../down-arrow.svg';
import { StyleSheet, css } from 'aphrodite';

const DownButton = props => {
  return (
    <div className={css(styles.downButton, styles.hover)}>
        <Scrollchor to={props.anchor} afterAnimate={props.stopRain}>
          <h4>{props.text}</h4>
          <img className="DownArrow" src={downArrow} alt="#"/>
        </Scrollchor>
    </div>
  );
};

DownButton.propTypes = {
  text: PropTypes.string.isRequired,
  anchor: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  downButton: {
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
    width: '100%',
    opacity: .7,
    fontSize: '1.2em'
  },
  hover: {
    ':hover': {
      opacity: 1
    }
  }
});

export default DownButton;
