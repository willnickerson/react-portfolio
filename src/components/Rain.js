import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Knob from 'react-canvas-knob';
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
      showMessage: false,
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

  determineMessage = () => {
    if(!this.state.showMessage && !this.state.seenLanding) {
      return (
        <p>How wet is portland?</p>   
      );
    } else if(this.state.showMessage && this.state.seenLanding) {
      return (
        <p>Make it rain</p>   
      );
    } else if(this.state.showMessage && !this.state.seenLanding) {
      return (
        <p>
          <Scrollchor to="#About" afterAnimate={this.learnClicked}>Learn more about what I do</Scrollchor>
        </p>
      );
    } else return null;
  }

  handleChange = newValue => {
    this.setState({numDrops: newValue});
  };

  onChangeEnd = () => {
    this.setState({showMessage: true});
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
        {this.determineMessage()}
      </div>
    );
  }
}

export default Rain;