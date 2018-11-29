import React, { Component } from "react";
import "./toolBar.css";
import DrawerToggleButton from "./../sideDrawer/drawerToggleButton";
import Search from "./search";

class ToolBar extends Component {
  render() {
    //console.log(this.props);
    const { onSidebarbarToggle } = this.props;
    return (
      <header className="toolBar">
        <nav className="toolBar__navigation">
          <div className="toolBar__toggle-button">
            <DrawerToggleButton onSidebarbarToggle={onSidebarbarToggle} />
          </div>
          <div className="toolBar__logo">
            <a href="/">Logo</a>
          </div>

          <Search className="toolBar__search" />
          <div className="toolBar__navigation-items">
            <ul>
              <li>
                <a href="/">Item1</a>
              </li>
              <li>
                <a href="/">Item2</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default ToolBar;
