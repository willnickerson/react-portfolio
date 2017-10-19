import React, { Component } from 'react';
import DownButton from './DownButton';
import { StyleSheet, css } from 'aphrodite';
import happyFace from '../assets/svg/happy.svg';
import cryingFace from '../assets/svg/crying.svg';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Rain extends Component {

  constructor(props) {
    super(props);

    this.state =  { 
      numDrops: 1,
      message: 'Turn up the rain',
      navMessage: (
        <DownButton text="About" anchor="#About"/>
      ),
      windowWidth: 0
    };
  }

  componentDidMount() {
    this.createRain(this.state.numDrops);
    this.testScroll();
    const windowWidth = window ? window.innerWidth : 1600;
    this.setState({
      windowWidth
    });

    window.addEventListener('resize', e => {
      this.setState({ windowWidth: e.target.innerWidth });
      this.stopRain();
      this.createRain(this.state.numDrops);
    });
  }

  componentWillUpdate(nextProps, nextState) {
    let numDrops = nextState.numDrops - this.state.numDrops;
    if( nextState.numDrops === 0 ) this.stopRain();
    else this.createRain(numDrops);
  }
  

  componentWillUnmount() {
    window.removeEventListener('resize');
  }
  

  learnClicked = () => {
    this.setState({seenLanding: true});
  }

  handleChange = newValue => {
    this.setState({numDrops: newValue});
  };


  testScroll = ev => {
    window.onscroll = () => {
      if(window.pageYOffset >= window.innerHeight - 20 && window.pageYOffset < window.innerHeight + 200) {
        this.createRain(this.state.numDrops);
      } else {
        this.stopRain();
      }
    };
  }

  randRange(minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  }

  
 
  createRain = (numDrops) => {
    const rainSection = document.getElementById('Rain');

    if(numDrops > 0) {
      for(let i = 1; i < numDrops * 150; i++) {
        const dropLeft = this.randRange(0, this.state.windowWidth);
        const dropTop = this.randRange(-1000, 1400);
  
        const drop = document.createElement('div');
  
        drop.setAttribute('class', 'drop');
        drop.setAttribute('id', `drop${i}`);
  
        rainSection.appendChild(drop);
  
        drop.style.left = `${dropLeft}px`;
        drop.style.top = `${dropTop}px`;
      }
    } else {
      const drops = document.getElementsByClassName('drop');
      const indeces = [];
      //change to actually generate enough random numbers instead of just skipping when it's a repeat
      for(let i = 0; i < ( -numDrops * 150); i++) {
        const randomNumber = Math.floor(Math.random() * this.state.numDrops * 150);
        if(indeces.indexOf(randomNumber) === -1) {
          indeces.push(randomNumber);
        }
      }
      for( let j = 0; j < indeces.length; j++) {
        const index = indeces[j];
        const drop = drops[index];
        if(drop) rainSection.removeChild(drop);
      }
    }

  };

  stopRain = () => {
    const rainSection = document.getElementById('Rain');
    while(rainSection.hasChildNodes()) {
      rainSection.removeChild(rainSection.lastChild);
    }
  }

  render() {
    return (
      <div className={css(styles.rainControl)}>
        <div ref="Rain" id="Rain"/>
          <div className={css(styles.knob)}>
          <img className={css(styles.emoticonLeft)} src={happyFace} alt=""/>
          <Slider className={css(styles.slider)}
            defaultValue={this.state.numDrops}
            min={0}
            max={11}
            step={.1}
            onChange={this.handleChange}
            onAfterChange={this.onChangeEnd} 
            trackStyle={{backgroundColor: 'red', width: '50%'}}
            handleStyle={{border: '2px solid #BBB' }}
          />
          <img className={css(styles.emoticonRight)} src={cryingFace} alt=""/>
          <div className="Clearfix"></div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  message: {
    fontSize: '1.6em',
  },
  slider: {
    float: 'left',
    width: 'calc(100% - 70px)'
  },
  knob: {
    margin: '35px auto 0 auto',
    width: '65%',
    position: 'relative',
    '@media (min-width: 600px)': {
      width: '30%',
      marginTop: '60px'
    }
  },
  emoticonLeft: {
    width: '25px',
    float: 'left',
    margin: '-5px 10px 0 0'
  },
  emoticonRight: {
    width: '25px',
    float: 'rigth',
    margin: '-5px 0 0 10px'
  },
});

export default Rain;