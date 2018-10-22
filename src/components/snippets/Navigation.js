import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container">
          
          <p className="navbar-brand js-scroll-trigger" onClick={ () => { this.props.handleClick("home")}}>
            Webx<span><i className="" id="brand"></i></span> Space
          </p>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <p className="nav-link js-scroll-trigger" onClick={ () => { this.props.handleClick("aboutUs")}}>
                  WHAT WE DO
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link js-scroll-trigger" onClick={ () => { this.props.handleClick("contactUs")}}>
                  WHO WE ARE
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link js-scroll-trigger" onClick={ () => { this.props.handleClick("contactUs")}}>
                  CONTACT US
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
