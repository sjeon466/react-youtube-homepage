import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import NavBar from "./components/toobar/navBar";
import ToolBar from "./components/toobar/toolbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ToolBar />
      </React.Fragment>
    );
  }
}

export default App;
