import React from "react";
import "./sideDrawer.css";
import ListGroup from "../common/listGroup";

const SideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.isSideDrawerOpen) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ListGroup />
    </nav>
  );
};

export default SideDrawer;
