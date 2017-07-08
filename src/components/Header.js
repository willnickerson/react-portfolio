import React, { Component } from 'react';


class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div className="Header">
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