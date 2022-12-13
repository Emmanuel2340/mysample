import arrow from "../../components/images/arrow.png";
import arrows from "../../components/images/arrow.png";
import React from "react";
import "./works.scss";
import AAimage from "../images/a (7).jpg";
import BBimage from "../images/a (8).webp";
import CCimage from "../images/a (23).jpg";
import { useState } from "react";
const Works = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: 1,
      icon: AAimage,
      title: "orange",
      img: AAimage,
      des: "Lorem ipsum dolor si amet consectetur adipisicing elit.Mollitia soluta nulla placeat qui provident.",
    },
    {
      id: 2,
      icon: BBimage,
      title: "milk",
      img: BBimage,
      des: "Lorem ipsum dolor si amet consectetur adipisicing elit.Mollitia soluta nulla placeat qui provident.",
    },
    {
      id: 3,
      icon: CCimage,
      title: "Tea",
      img: CCimage,
      des: "Lorem ipsum dolor si amet consectetur adipisicing elit.Mollitia soluta nulla placeat qui provident.",
    },
  ];
  const sliderImage = (way) => {
    if (way === "left") {
      if (currentSlider > 0) {
        setCurrentSlider(currentSlider - 1);
      } else {
        setCurrentSlider(currentSlider + 2);
      }
    } else {
      if (currentSlider < data.length - 1) {
        setCurrentSlider(currentSlider + 1);
      } else {
        setCurrentSlider(0);
      }
    }
  };

  console.log(currentSlider);
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((d, index) => (
          <div className="container" key={index}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.des}</p>
                  <span>Project</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        className="arrow lefty"
        onClick={() => sliderImage("left")}
        src={arrow}
        alt=""
      />
      <img
        className="arrow righty"
        onClick={() => sliderImage()}
        src={arrows}
        alt=""
      />
    </div>
  );
};

export default Works;
