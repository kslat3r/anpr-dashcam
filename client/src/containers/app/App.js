import React, { Component } from 'react';
import Image from '../image/Image';
import Details from '../details/Details';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image />
        <Details />
      </div>
    );
  }
}

export default App;
