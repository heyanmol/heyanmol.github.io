import React from "react";
import { Link } from "react-router-dom";
function Side(props) {
  function handleFirstPath() {
    var win = window.open(props.firstPath, "_blank");
        win.focus();
  }
  function handleSecondPath() {
    var win = window.open(props.secondPath, "_blank");
        win.focus();
  }
  function handleThirdPath() {
    var win = window.open(props.thirdPath, "_blank");
        win.focus();
  }
  function handleForthPath() {
    var win = window.open(props.forthPath, "_blank");
        win.focus();
  }
  return (
    <>
      <div className="side-container">
        <ul className="navlist">
          <li className="navlist-item">
            <p className="nav-link" onClick={handleFirstPath}>
              {props.first}
            </p>
          </li>

          <li className="navlist-item">
          <p className="nav-link" onClick={handleSecondPath}>
              {props.second}
            </p>
          </li>

          <li className="navlist-item">
          <p className="nav-link" onClick={handleThirdPath}>
              {props.third}
            </p>
          </li>

          <li className="navlist-item">
          <p className="nav-link" onClick={handleForthPath}>
              {props.forth}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Side;
