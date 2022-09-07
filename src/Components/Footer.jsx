import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <>
      <div className="footer-body">
        <Link className="Link" to={props.leftLink}>
          <h3>{props.left}</h3>
        </Link>
        <Link className="Link" to={props.rightLink}>
          <h3>{props.right}</h3>
        </Link>
      </div>
    </>
  );
}

export default Footer;
