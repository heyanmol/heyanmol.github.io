import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Side from "./Side";
import ConImg from "../images/contact-img.webp";
import AnimatedCursor from "react-animated-cursor";

function Contact() {
  return (
    <>
      <Header left="anmol." leftLink="/" right=" " rightLink="/contact" />
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
      <div className="contact-body">
        <div className="contact-img">
          <img src={ConImg} alt="" />
        </div>

        <div className="contact-info">
          <div className="c1">
            <h1>having a great idea to share?</h1>
            <p>
              or want to have a cup of coffee and talk, just drop me a message{" "}
            </p>
          </div>

          <div className="email">
            <p>email:</p>

            <h3 className="email-info">
              <a href="mailto:anmolbapai2001@gmail.com">
                anmolbajpai2001@gmail.com
              </a>
            </h3>
          </div>

          <div className="connect">
            <p>or connect with me on:</p>
            <div className="social">
              <a href="#">
                <h2>instagram</h2>
              </a>
              <a href="#">
                <h2>Linkedin</h2>
              </a>
              <a href="#">
                <h2>twitter</h2>
              </a>

              <a href="#">
                <h2>github</h2>
              </a>
            </div>
          </div>
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
        leftLink="/ds"
        right="designing and finance."
        rightLink="/contact"
      />
    </>
  );
}

export default Contact;
