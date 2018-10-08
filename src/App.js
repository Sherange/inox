import React, { Component } from 'react';
import Navigation from './snippets/Navigation';
import Layout from './snippets/Layout';
import AppStore from './snippets/AppStore';
import Features from './snippets/Features';
import Video from './snippets/Video';
import Contact from './snippets/Contact';
import Footer from './snippets/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <Layout></Layout>
        <Features></Features>
        <AppStore></AppStore>
        <Video></Video>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
