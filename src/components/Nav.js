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
    );
  }
}


const styles = StyleSheet.create({
  navList: {
    fontSize: '.9em'
  }
});

export default Nav;