import React, { Component } from "react";
import MyApp from "./MyApp";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MyApp />
      </BrowserRouter>
    );
  }
}

export default App;
