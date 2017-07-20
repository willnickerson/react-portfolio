import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Knob from 'react-canvas-knob';
import DownButton from './DownButton';
import { StyleSheet, css } from 'aphrodite';
import sadFace from '../assets/svg/sad.svg';
import happyFace from '../assets/svg/happy.svg';
import cryingFace from '../assets/svg/crying.svg';

class Rain extends Component {

  constructor(props) {
    super(props);

    this.state =  { 
      numDrops: 7,
      message: 'Turn up the rain',
      navMessage: (
        <DownButton text="About" anchor="#About"/>
      )
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
    if(this.state.numDrops > 5) {
      this.setState({ message: 'Turn down the rain'});
    } else {
      this.setState({ message: 'Turn up the rain'});
    }
    this.createRain();
  }

  displayInput = () => {
    if(this.state.numDrops < 4) {
      return (
        <img className={css(styles.emoticon)} src={happyFace} alt=": )"/>
      );
    } else if(this.state.numDrops <= 7) {
      return (
        <img className={css(styles.emoticon)} src={sadFace} alt=": ("/>
      );
    } else {
      return (
        <img className={css(styles.emoticon)} src={cryingFace} alt=":'("/>
      );
    }
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
    while(rainSection.hasChildNodes()) {
      rainSection.removeChild(rainSection.lastChild);
    }
  }

  //curve the text around the circle
  //change message based on the value of the knob
  render() {
    return (
      <div className={css(styles.rainControl)}>
        <div ref="Rain" id="Rain"/>
        {/* <h4 className={css(styles.message)}>{this.state.message}</h4>
        <div className={css(styles.knob)}>
          <Knob className={css(styles.knob)}
            value={this.state.numDrops}
            onChange={this.handleChange}
            onChangeEnd={this.onChangeEnd}
            step={.1}
            width={180}
            height={180} 
            disableTextInput={true}
            bgColor={'white'}
            fgColor={'rgb(255,40,0)'}
            thickness={.08}
            min={0}
            max={11}
            displayInput={false}
            displayCustom={this.displayInput}
          />
        </div> */}

        <DownButton text="About" anchor="#About"/>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  message: {
    fontSize: '1.6em',
  },
  knob: {
    margin: '25px auto 0 auto',
    width: '180px',
    position: 'relative'
  },
  emoticon: {
    position: 'absolute',
    width: '180px',
    top: 0,
    left: 0,
    zIndex: '-1',
  }
});

export default Rain;