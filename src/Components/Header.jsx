import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconMusicBlack from "../images/icon-music-black.svg";
import IconMusicGrey from "../images/icon-music-grey.svg";

function Header(props) {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <div className="header-body">
        <Link className="Link" to={props.leftLink}>
          <h3
            className="header-left"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            {props.left}{" "}
            {isShown === true ? (
              <img src={IconMusicBlack} />
            ) : (
              <img src={IconMusicGrey} />
            )}
          </h3>
          {}
        </Link>
        <Link className="Link" to={props.rightLink}>
          <h3>{props.right}</h3>
        </Link>
      </div>
    </>
  );
}

export default Header;
