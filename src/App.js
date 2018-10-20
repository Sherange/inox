import React, { Component } from 'react';
import Navigation from './components/snippets/Navigation';
import Home from './components/snippets/Home';
import AboutUs from './components/snippets/AboutUs';
import Products from './components/snippets/Products';
import Video from './components/snippets/Video';
import ContactUs from './components/snippets/ContactUs';
import Footer from './components/snippets/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <Home></Home>
        <AboutUs></AboutUs>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
