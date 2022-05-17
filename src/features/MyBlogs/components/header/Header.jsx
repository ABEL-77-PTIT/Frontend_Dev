import React, { Component } from "react";
import "./header.css";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__title">
          <span className="header__titleSm">React</span>
          <span className="header__titleLg">Blog</span>
        </div>
        <img
          className="header__img"
          src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>
    );
  }
}

export default Header;
