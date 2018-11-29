import React, { Component } from "react";
import "./App.css";
//import Header from "./components/header";
import NavBar from "./components/toobar/navBar";
import SideDrawer from "./components/sideDrawer/sideDrawer";
import Backdrop from "./components/backdrop/backdrop";
import Body from "./components/body";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  handleSidebarToggle = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  handleBackDropClick = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop onBackDropClicked={this.handleBackDropClick} />;
    }

    return (
      <div style={{ height: "100%" }}>
        <NavBar onSidebarbarToggle={this.handleSidebarToggle} />
        <SideDrawer isSideDrawerOpen={this.state.sideDrawerOpen} />
        {backdrop}
        <Body />
      </div>
    );
  }
}

export default App;
