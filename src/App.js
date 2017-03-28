import React, { Component } from 'react';
import './App.css';
import Clock from "./components/Clock";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="App-header">
            <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Clock/>
      </div>
    );
  }
}

export default App;
