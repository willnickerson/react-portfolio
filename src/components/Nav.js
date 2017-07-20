import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import Scrollchor from 'react-scrollchor';
import Collapsible from 'react-collapsible';
import { StyleSheet, css } from 'aphrodite';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <div className={css(styles.mobileNav)}>
          <Collapsible
            open={this.state.isOpen}
            trigger={
              <HamburgerMenu
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

            <ul className={css(styles.navList)}>
              <li><Scrollchor to="#About" beforeAnimate={() => this.handleClick.bind(this)()}>About</Scrollchor></li>
              <li><Scrollchor to="#Projects" beforeAnimate={() => this.handleClick.bind(this)()}>Projects</Scrollchor></li>
              <li><Scrollchor to="#Contact" beforeAnimate={() => this.handleClick.bind(this)()}>Contact</Scrollchor></li>
              <li><Scrollchor to="#Landing" beforeAnimate={() => this.handleClick.bind(this)()}>Rain</Scrollchor></li>
            </ul>
          </Collapsible>
          
        </div>
        <ul className={css(styles.nav)}>
            <li className={css(styles.mainNavItem)}><Scrollchor to="#About" beforeAnimate={() => this.handleClick.bind(this)()}>About</Scrollchor></li>
            <li className={css(styles.mainNavItem)}><Scrollchor to="#Projects" beforeAnimate={() => this.handleClick.bind(this)()}>Projects</Scrollchor></li>
            <li className={css(styles.mainNavItem)}><Scrollchor to="#Contact" beforeAnimate={() => this.handleClick.bind(this)()}>Contact</Scrollchor></li>
            <li className={css(styles.mainNavItem)}><Scrollchor to="#Landing" beforeAnimate={() => this.handleClick.bind(this)()}>Rain</Scrollchor></li>
        </ul>
      </div>

    );
  }
}


const styles = StyleSheet.create({
  mobileNav: {
    '@media (min-width: 600px)': {
      display: 'none'
    }
  },
  navList: {
    fontSize: '1.05em',
    fontFamily: '"Maiden", "Raleway", sans-serif',
    width: '100vw',
    marginTop: '8px',
    '@media (min-width: 360px)': {
      fontSize: '1.2em'
    }
  },
  nav: {
    display: 'none',
    '@media (min-width: 601px)': {
      display: 'block',
      float: 'left',
      margin: '3%'
    }
  },
  mainNavItem: {
    display: 'inline-block',
    marginRight: '15px',
    fontSize: '1em',
    marginTop: '0'
  }
});

export default Nav;