import React from 'react';
import PropTypes from 'prop-types';
import Scrollchor from 'react-scrollchor';

const DownButton = props => {
  return (
    <div className="Down-Button">
        <Scrollchor to={props.anchor} afterAnimate={props.stopRain}>
          <h4>{props.text}</h4>
          <span className="icon-arrow-down2"></span>
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
