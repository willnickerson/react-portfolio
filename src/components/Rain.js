import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Knob from 'react-canvas-knob';
import DownButton from './DownButton';
import Scrollchor from 'react-scrollchor';

class Rain extends Component {
  static PropTypes = {
    numDrops: PropTypes.number.isRequired,
    createRain: PropTypes.func.isRequired,
    stopRain: PropTypes.func.isRequired,
    onRainChange: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state =  { 
      numDrops: this.props.numDrops,
      message: 'How wet is portland?',
      navMessage: (
        <DownButton text="More about me" anchor="#About"/>
      ),
      showMessage: true,
      seenLanding: false
    };
  }

  componentDidMount() {
    this.props.createRain();
  }

  learnClicked = () => {
    this.props.stopRain();
    this.setState({seenLanding: true});
  }

  handleChange = newValue => {
    this.setState({numDrops: newValue});
  };

  onChangeEnd = () => {
    this.setState({showMessage: false});
    this.props.onRainChange(this.state.numDrops);
  }

  render() {
    return (
      <div className="RainControl">
        <div ref="Rain" id="Rain"/>
        <Knob
          value={this.state.numDrops}
          onChange={this.handleChange}
          onChangeEnd={this.onChangeEnd}
          step={.1}
          width={75}
          height={75}
          disableTextInput={true}
          bgColor={'white'}
          fgColor={'red'}
          thickness={.08}
          min={0}
          max={11}
        />
        {this.state.showMessage ? 
          <h4>{this.state.message}</h4> :
          <p onClick={this.props.stopRain}>{this.state.navMessage}</p>
        }
      </div>
    );
  }
}

export default Rain;