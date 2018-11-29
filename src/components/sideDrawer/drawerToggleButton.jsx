import React from "react";
import "./drawerToggleButton.css";

const DrawerToggleButton = props => (
  <button className="toggle-button" onClick={props.onSidebarbarToggle}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
);
export default DrawerToggleButton;
