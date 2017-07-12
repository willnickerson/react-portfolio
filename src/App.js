import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import Scrollchor from 'react-scrollchor';
import Collapsible from 'react-collapsible';
import logo from './black-coffee-cup.svg';
import './App.css';
import Rain from './components/Rain';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import DownButton from './components/DownButton';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numDrops: 3,
      isOpen: false,
    };
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
    console.log('handleClick called', this.state.isOpen);
  }

  componentDidMount = () => {
    this.testScroll();
  }


  testScroll = ev => {
    window.onscroll = () => {
      if(window.pageYOffset < 200) {
        this.createRain();
      } else {
        this.stopRain();
      }
    };
  }

  randRange(minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  }

  onRainChange = numDrops => {
    this.setState({ numDrops });
    this.createRain();
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

  render() {
    return (
      <div className="App">
        <Collapsible
          open={this.state.isOpen}
          trigger={
            <HamburgerMenu className="Hamburger"
              isOpen={this.state.isOpen}
              menuClicked={this.handleClick.bind(this)}
              width={35}
              height={25}
              strokeWidth={1}
              rotate={0}
              color='white'
              borderRadius={2}
              animationDuration={0.5}
            />
          }>

          <ul>
            <li><Scrollchor to="#About" beforeAnimate={() => this.handleClick.bind(this)()}>About</Scrollchor></li>
            <li><Scrollchor to="#Projects" beforeAnimate={() => this.handleClick.bind(this)()}>Projects</Scrollchor></li>
            <li><Scrollchor to="#Contact" beforeAnimate={() => this.handleClick.bind(this)()}>Contact</Scrollchor></li>
            <li><Scrollchor to="#Landing" beforeAnimate={() => this.handleClick.bind(this)()}>Back to the Rain</Scrollchor></li>
          </ul>
        </Collapsible>
        <Header/>

        <div id="Landing">
          <img src={logo} className="App-logo" alt="logo" />
          <Rain
            numDrops={this.state.numDrops}
            stopRain={this.stopRain} 
            createRain={this.createRain}
            onRainChange={this.onRainChange}
          />
        </div>

        <div className="Page" id="About">
            <About/>
            <DownButton stopRain={this.stopRain} text="See some of my work" anchor="#Projects"/>
        </div>

        <div className="Page" id="Projects">
          <Projects/>
          <DownButton stopRain={this.stopRain} text="Contact Me!" anchor="#Contact"/>
        </div>

        <div className="Page" id="Contact">
          <Contact/>
        </div>
      </div>
    );
  }
}


export default App;

