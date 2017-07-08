import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import Scrollchor from 'react-scrollchor';
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
      <div className="Header">
          <div className="Logo">
            <h5>
              W.N. 
            </h5>
          </div>
          <Collapsible 
            trigger={
              <HamburgerMenu className="Hamburger"
                isOpen={this.state.open}
                menuClicked={this.handleClick.bind(this)}
                width={35}
                height={25}
                strokeWidth={1}
                rotate={0}
                color='white'
                borderRadius={2}
                animationDuration={0.5}
              />
            }
          >
            <ul>
              <li><Scrollchor to="#About">About</Scrollchor></li>
              <li><Scrollchor to="#Projects">Projects</Scrollchor></li>
              <li><Scrollchor to="#Contact">Contact</Scrollchor></li>
              <li><Scrollchor to="#Landing">Back to the Rain</Scrollchor></li>
            </ul>
          </Collapsible>
        <div className="Clearfix"/>
      </div>
    );
  }
}

export default Header;