import React from "react";
import "./sideDrawer.css";

const SideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.isSideDrawerOpen) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">item 1</a>
        </li>
        <li>
          <a href="/">item 1</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
