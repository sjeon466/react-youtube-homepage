import React, { Component } from "react";
import "./toolBar.css";

class ToolBar extends Component {
  render() {
    return (
      <header>
        <nav>
          <div />
          <div>
            <a href="/">The Logo</a>
          </div>
          <div>
            <ui>
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/">Users</a>
              </li>
            </ui>
          </div>
        </nav>
      </header>
    );
  }
}

export default ToolBar;
