import React from 'react';
import '../Header/Header.css';
import logo from '../../images/logo.png';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div id="header-logo">
          <a href="/test">
            <img src={logo} width="200px" height="130px" alt="logo-img" />
          </a>
        </div>
        <div className="header-navBar">
          <div id="header-navBar__opt1">
            <p>
              <a href="/test">News &#38; Coupon</a>
            </p>
          </div>
          <div id="header-navBar__opt2">
            <p>
              <a href="/test">Help</a>
            </p>
          </div>
          <div id="header-navBar__opt3">
            <p>
              <a href="/test">Sign up &#47; Sign in</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
