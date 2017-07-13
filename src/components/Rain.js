import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Knob from 'react-canvas-knob';
import DownButton from './DownButton';
import { StyleSheet, css } from 'aphrodite';

class Rain extends Component {

  constructor(props) {
    super(props);

    this.state =  { 
      numDrops: 3,
      message: 'Turn up the rain!',
      navMessage: (
        <DownButton text="More about me" anchor="#About"/>
      ),
      showMessage: true,
      seenLanding: false
    };
  }

  componentDidMount() {
    this.createRain();
    this.testScroll();
  }

  learnClicked = () => {
    this.setState({seenLanding: true});
  }

  handleChange = newValue => {
    this.setState({numDrops: newValue});
  };

  onChangeEnd = () => {
    this.setState({showMessage: false});
    this.createRain();
  }

  testScroll = ev => {
    window.onscroll = () => {
      if(window.pageYOffset < 20) {
        this.createRain();
      } else {
        this.stopRain();
      }
    };
  }

  randRange(minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  }
 
  createRain = () => {
    this.stopRain();
    const rainSection = document.getElementById('Rain');
    // const rainSection = ReactDOM.findDOMNode(this.refs.Rain);

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

  stopRain = () => {
    const rainSection = document.getElementById('Rain');
    // const rainSection = ReactDOM.findDOMNode(this.refs.Rain);
    while(rainSection.hasChildNodes()) {
      rainSection.removeChild(rainSection.lastChild);
    }
  }

  render() {
    return (
      <div className={css(styles.rainControl)}>
        <div ref="Rain" id="Rain"/>
        <Knob className={css(styles.knob)}
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
          <p>{this.state.navMessage}</p>
        }
      </div>
    );
  }
}

const styles = StyleSheet.create({
  rainControl: {
    marginTop: '25px'
  }
});

export default Rain;