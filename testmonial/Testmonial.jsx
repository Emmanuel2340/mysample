import React from "react";
import "./testmonial.scss";
import A from "../images/a (10).jpg";
import B from "../images/a (10).webp";
import C from "../images/a (11).jpg";
import arrowCurved from "../images/curvedarrow.png";
import play from "../images/play.png";

const data = [
  {
    id: 1,
    name: "Alex",
    left: arrowCurved,
    right: play,
    img: B,
    title: "MANAGER of Lama",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad doloresLorem ipsum dolor sit amet consectetur",
  },
  {
    id: 1,
    name: "Alex",
    left: arrowCurved,
    right: play,
    img: A,
    title: "CEO of Lama",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad doloresLorem ipsum dolor sit amet consectetur",
  },
  {
    id: 1,
    name: "Alex",
    left: arrowCurved,
    right: play,
    img: C,
    title: "Director of lama",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad doloresLorem ipsum dolor sit amet consectetur",
  },
];
const Testmonial = () => {
  return (
    <div className="testmonial" id="testmonial">
      <h1>Testmonial</h1>
      <div className="container">
        {data.map((d, index) => (
          <div className="card" key={index}>
            <div className="top">
              <img className="left" src={d.left} alt="" />
              <img className="user" src={d.img} alt="" />
              <img src={d.right} alt="" className="right" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testmonial;
