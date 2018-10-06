import React, { Component } from 'react';
import Navigation from './snippets/Navigation';
import Layout from './snippets/Layout';
import AppStore from './snippets/AppStore';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <Layout></Layout>
        <AppStore></AppStore>
      </div>
    );
  }
}

export default App;
