import { ArrowDown } from "heroicons-react";
import React, { useEffect, useRef } from "react";
import Himage from "../images/5.png";
import { init } from "ityped";
import "./home.scss";

const Home = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 2000,
      strings: ["Developer", "Designer"],
    });
  }, []);
  return (
    <div className="home" id="home">
      <div className="left">
        <div className="imageContainer">
          <img src={Himage} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Chijioke Igwe</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <ArrowDown className="w-9 h-20" id="arrow" />
        </a>
      </div>
    </div>
  );
};

export default Home;
