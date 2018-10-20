import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <strong>
                <p>Inox IT</p>
              </strong>
            </div>

            <div className="col-3">
              <strong>
                <p>Get in touch</p>
              </strong>
            </div>

            <div className="col-3">
              <strong>
                <p>Contact Us</p>
              </strong>
            </div>

            <div className="col-3">
            <strong>
                <p>Get Our Offers</p>
              </strong>
            <br></br>
            <iframe src="https://www.fiverr.com/anywhere/anywhere_widget/5bcb2af71d3f4b000be3a753" width="190" height="75" frameBorder="0" scrolling="no"/>
            </div>
          </div>
          <hr />
          <p>&copy; 2018 All rights reserved. By Inox It Solutions.</p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#">Privacy</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li className="list-inline-item">
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
