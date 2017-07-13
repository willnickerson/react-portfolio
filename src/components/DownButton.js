import React from 'react';
import PropTypes from 'prop-types';
import Scrollchor from 'react-scrollchor';
import downArrow from '../down-arrow.svg';

const DownButton = props => {
  return (
    <div className="Down-Button">
        <Scrollchor to={props.anchor} afterAnimate={props.stopRain}>
          <span><h4>{props.text}</h4></span>
          <img className="DownArrow" src={downArrow} alt="#"/>
        </Scrollchor>
    </div>
  );
};

DownButton.propTypes = {
  text: PropTypes.string.isRequired,
  anchor: PropTypes.string.isRequired,
  stopRain: PropTypes.func.isRequired
};


export default DownButton;
