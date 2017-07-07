import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import Collapsible from 'react-collapsible';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open
    });
  }


  render() {
    return (
      <div>
        <Collapsible 
          trigger={<HamburgerMenu
            isOpen={this.state.open}
            menuClicked={this.handleClick.bind(this)}
            width={18}
            height={15}
            strokeWidth={1}
            rotate={0}
            color='white'
            borderRadius={0}
            animationDuration={0.5}
          />}
        >
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </Collapsible>
        {/*{this.state.open ? 
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Github</li>
          <li>Twitter</li>
        </ul> : null}*/}
      </div>
    );
  }
}

export default Header;