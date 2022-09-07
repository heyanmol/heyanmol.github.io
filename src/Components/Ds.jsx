import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Side from "./Side";
import DsImg from "../images/ds.webp";
import AnimatedCursor from "react-animated-cursor";
function Ds() {
  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={15}
        color="0,0,0"
        outerAlpha={0.1}
        innerScale={0.8}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
        ]}
      />
      <Header left="anmol." leftLink="/" right="say hi." rightLink="/contact" />

      <div className="ds-body">
        <div className="ds-img">
          <img src={DsImg} alt="ds-img" />
        </div>
        <div className="ds-info">
          <ul className="ds-ul">
            <li className="ds-projects">
              <p>01.</p>

              <a className="pro-name" href="#">
                Lorem ipsum dolor, sit elit. Voluptates, soluta?
              </a>
            </li>
            <li className="ds-projects">
              <p>02.</p>

              <a className="pro-name" href="#">
                Lorem ipsum dolor, sit elit. Voluptates, soluta?
              </a>
            </li>
            <li className="ds-projects">
              <p>03.</p>

              <a className="pro-name" href="#">
                Lorem ipsum dolor, sit elit. Voluptates, soluta?
              </a>
            </li>
            <li className="ds-projects">
              <p>04.</p>

              <a className="pro-name" href="#">
                Lorem ipsum dolor, sit elit. Voluptates, soluta?
              </a>
            </li>
          </ul>
        </div>
        <Side
          first="gith."
          firstPath="#"
          second="medi."
          secondPath="#"
          third="inst."
          thirdPath="#"
          forth="link"
          forthPath="#"
        />
      </div>
      <Footer
        left="data science"
        leftLink="/"
        right="designing and finance."
        rightLink="/contact"
      />
    </>
  );
}

export default Ds;
