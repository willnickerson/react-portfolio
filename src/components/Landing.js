import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/svg/wn-cup-logo.svg';
import whiteLogo from '../assets/svg/white-coffee-cup.svg';
import downArrow from '../assets/svg/down-arrow.svg';
import downArrowRed from '../assets/svg/down-arrow-red.svg';
import redLogo from '../assets/svg/red-coffee-cup2.svg';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstMessage: false,
      seccondMessage: false,
    };
  }

  showSecondMessage = () => {
    this.setState({ firstMessage: true });
  }

  showArrow = () => {
    setTimeout(() => {
      this.setState({ seccondMessage: true});
    }, 1300);
  }

  render() {
    return (
      <div id="Landing" className={css(styles.landingPage)}>
        <div className={css(styles.typeLeft)}>
          <Typist 
            cursor={
              { hideWhenDone: true, element: '$'  }
            }
            onTypingDone={this.showSecondMessage}
            className={`${css(styles.type)} Clearfix`}>
              Hi, My name is Will.
          </Typist>
        </div>
        <div className={css(styles.cupContainer)}>
          <Scrollchor to="#About">
            {this.state.seccondMessage ?
              <img src={logo} className={css(styles.logo, styles.forceHoveredLogo)} alt="#" />:
              <img src={logo} className={css(styles.logo)} alt="#" />
            }
            {this.state.seccondMessage && <img src={redLogo} className={css(styles.logo, styles.redLogo)} alt="#"/> }
            <img src={whiteLogo} className={css(styles.whiteLogo)} alt="#"/>
            {this.state.seccondMessage ?
              <div className={css(styles.arrowContainer)}>
                <img src={downArrowRed} alt="#" className={`${css(styles.redArrow)} arrow`}/>
                <img src={downArrow} alt="#" className={`${css(styles.arrow, styles.forceHoveredArrow)} arrow`}/>
              </div>:
              <div className={css(styles.arrowContainer)}>
                <img src={downArrow} alt="#" className={`${css(styles.arrow)} arrow`}/>
              </div>
            }
          </Scrollchor>
        </div>
      <div className={css(styles.typeRight)}>
        {this.state.firstMessage ? 
          <Typist 
            className={css(styles.type)}
            cursor={
              { hideWhenDone: true, element: '$' }
            }
            onTypingDone={this.showArrow}>
              Learn more about what I do.
          </Typist> : null
        }
      </div>
      </div>
    );
  }
}

export default Landing;


const styles = StyleSheet.create({
  landingPage: {
    height: '100vh',
    position: 'relative',
    overflow: 'hidden'
  },
  type: {
    color: 'white',
    fontFamily: 'raleway',
    '@media (min-width: 600px)': {
      fontSize: '1em'
    }
  },
  typeLeft: {
    position: 'absolute',
    left: '0',
    top: '40%',
    width: '25%',
    padding: '0 10px',
    '@media (min-width: 600px)': {
      left: '10%',
      top: '50%',
    } 
  },
  typeRight: {
    position: 'absolute',
    right: '0',
    top: '38%',
    width: '25%',
    padding: '0 10px',
    '@media (min-width: 600px)': {
      right: '10%',
      top: '50%',
    } 
  },
  cupContainer: {
    margin: '28vh auto 0 auto',
    position: 'relative',
    marginBottom: '26vh',
    height: '42vh',
    width: '50%',
    '@media (min-width: 600px)': {
      height: '55vh',
      marginTop: '25vh'
    } 
  },
  logo: {
    position: 'absolute',
    height: '90%',
    transition: 'all .5s ease',
    ':hover': {
      opacity: 0,
    },
    ':hover ~ div img': {
      opacity: 1
    },
  },
  whiteLogo: {
    height: '90%'
  },
  redLogo: {
    opacity: 0,
    transition: 'all .5s ease',
    ':hover': {
      opacity: 1
    },
  },
  arrowContainer: {
    height: '45px',
    width: '45px',
    margin: '45px auto',
  },
  arrow: {
    height: '45px',
    opacity: '0',
    transition: 'all .5s ease',
  },
  redArrow: {
    height: '45px',
    position: 'absolute', 
    transition: 'all .5s ease',
  },
  forceHoveredArrow: {
    opacity: 1,
  },
  forceHoveredLogo: {
    opacity: 0,
  },
});
