import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import Scrollchor from 'react-scrollchor';
import Collapsible from 'react-collapsible';


class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className="Header">
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

        <ul className="Socials">
          <li>
            <span className="icon-linkedin"></span>
          </li>
          <li>
            <span className="icon-github"></span>
          </li>
        </ul>
        <div className="Clearfix"/>
      </div>
    );
  }
}

export default Header;