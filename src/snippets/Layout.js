import React, { Component } from "react";

class Layout extends Component {
  render() {
    return (
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-7 my-auto">
              <div className="header-content mx-auto">
                <h1 className="mb-5">
                 Inox - Web Application Development
                </h1>
                <h3 >We design modern websites, unique for every customer reflecting their preferences and suiting their business needs</h3>
                <a
                  href="#download"
                  className="btn btn-outline btn-xl js-scroll-trigger"
                >
                  CONTACT US NOW
                </a>
              </div>
            </div>
            <div className="col-lg-5 my-auto">
              <div className="device-container">
                <div className="device-mockup iphone6_plus portrait white">
                  <div className="device">
                    <div className="screen">
                      {/* <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! --> */}
                      <img
                        src='../img/iphone-6-homescreen-standard.jpg'
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="button">
                      {/* <!-- You can hook the "home button" to some JavaScript events or just remove it --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Layout;
