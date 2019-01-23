import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Route from "react-router-dom/es/Route";
import Home from "./Home";
import WorkHistory from "./WorkHistory";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Route path="/" exact component={Home} />
        <Route path="/work-history/" component={WorkHistory} />
      </div>

    );
  }
}

export default Main;
