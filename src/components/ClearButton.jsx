import React from "react";
import "./ClearButton.css";

export const ClearButton = props => (
  <div className="reset" onClick={props.handleClear}>
    {props.children}
  </div>
);
