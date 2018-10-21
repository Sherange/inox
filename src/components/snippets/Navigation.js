import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container">
          <i class="fas fa-space-shuttle fa-rotate-270"></i>
          <p className="navbar-brand js-scroll-trigger">
            Webx-space
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
                <p className="nav-link js-scroll-trigger">
                  WHAT WE DO
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link js-scroll-trigger">
                  WHO WE ARE
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link js-scroll-trigger">
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
