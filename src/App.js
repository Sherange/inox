import React, { Component } from "react";
import Navigation from "./components/snippets/Navigation";
import Home from "./components/snippets/Home";
import AboutUs from "./components/snippets/AboutUs";
// import Products from './components/snippets/Products';
// import Video from './components/snippets/Video';
// import ContactUs from './components/snippets/ContactUs';
import Footer from "./components/snippets/Footer";
import scrollToComponent from "react-scroll-to-component";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = data => {
    if (data === "home") {
      scrollToComponent(this.home, {
        offset: 0,
        align: "top",
        duration: 2000,
        ease: "inExpo"
      });
    } else if (data === "aboutUs") {
      scrollToComponent(this.aboutUs, {
        offset: 0,
        align: "top",
        duration: 1000,
        ease: "inExpo"
      });
    } else if (data === "contactUs") {
      scrollToComponent(this.contactUs, {
        offset: 0,
        align: "top",
        duration: 1000,
        ease: "inExpo"
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Navigation handleClick={this.handleClick} />
        <Home
          handleClick={this.handleClick}
          ref={section => {
            this.home = section;
          }}
        />
        <AboutUs
          ref={section => {
            this.aboutUs = section;
          }}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
