import React, { Component } from "react";

class AboutUs extends Component {
  render() {
    return (
      <section className="features" id="what-we-do">
        <div className="container">
          <div className="section-heading text-center">
            <h2>What We Do</h2>
            <p className="text-muted">Check out what we can do for you!</p>
            <hr />
          </div>
          <div className="row">
            <div className="col-lg-4 my-auto">
              <div className="device-container">
                <div className="device-mockup iphone6_plus portrait white">
                  <div className="device">
                    <div className="screen">
                      {/* <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! --> */}
                      <img
                        src="../img/iphone-6-homescreen-standard.jpg"
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
            <div className="col-lg-8 my-auto">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="fas fa-desktop text-primary" />
                      <h3>Web App Solutions</h3>
                      <p className="text-muted">
                      We develop Web sites and Web appliacations with latest & durable technologies.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="fas fa-mobile-alt" />
                      <h3>Mobile App Solutions</h3>
                      <p className="text-muted">
                      We deliver your idea into mobile app with latest mobile app development technologies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="fas fa-server" />

                      <h3>Standalone Solutions</h3>
                      <p className="text-muted">
                      If you have a small scale business, this is ideal for you. We develop best customizable application.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="fas fa-cogs" />
                      <h3>Hardware Solutions</h3>
                      <p className="text-muted">
                      We have many kinds of hardware solutions which ideal for different types of businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUs;
