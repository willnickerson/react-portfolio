import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Knob from 'react-canvas-knob';
import Scrollchor from 'react-scrollchor';

class Rain extends Component {
  constructor(props) {
    super(props);
  
    this.state =  { 
      numDrops: 3,
      showMessage: false
    };
  }

  componentDidMount() {
    this.createRain();
  }

  randRange(minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  }
  
  createRain = () => {
    const rainSection = ReactDOM.findDOMNode(this.refs.Rain);

    while(rainSection.hasChildNodes()) {
      rainSection.removeChild(rainSection.lastChild);
    }

    for(let i = 1; i < this.state.numDrops * 150; i++) {
      const dropLeft = this.randRange(0, 1600);
      const dropTop = this.randRange(-1000, 1400);

      const drop = document.createElement('div');

      drop.setAttribute('class', 'drop');
      drop.setAttribute('id', `drop${i}`);

      rainSection.appendChild(drop);

      drop.style.left = `${dropLeft}px`;
      drop.style.top = `${dropTop}px`;
    }
  };

  handleChange = newValue => {
    this.setState({numDrops: newValue});
  };

  onChangeEnd = () => {
    this.setState({showMessage: true});
    this.createRain();
  }

  render() {
    return (
      <div className="Rain">
        <div ref="Rain"/>
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
          <p><Scrollchor to="#home"animate={{offset: 0, duration: 100}}>Learn more about what I do</Scrollchor></p>
          : <p>From a scale of 1 to 11, how miserable is it outside?</p>}
      </div>
    );
  }
}

export default Rain;