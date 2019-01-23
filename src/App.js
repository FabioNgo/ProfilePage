import React, { Component } from 'react';
import logo from './img/logo.svg';
import './App.css';
import Header from "./Header";
import SideBar from "./SideBar";
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <SideBar/>


      </div>
    );
  }
}

export default App;
