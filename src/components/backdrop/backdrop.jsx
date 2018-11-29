import React from "react";
import "./backdrop.css";
const Backdrop = props => (
  <div className="backdrop" onClick={props.onBackDropClicked} />
);
export default Backdrop;
