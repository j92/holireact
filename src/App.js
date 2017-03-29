import React, { Component } from 'react';
import './App.css';
import Clock from "./components/Clock";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="container-fluid">
          <div className="row">
            <SideBar/>
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h2>Welcome to React</h2>
                <Clock/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
