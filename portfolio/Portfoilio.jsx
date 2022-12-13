import React, { useState } from "react";
import "./portfolio.scss";
// import aimage from "../images/a (5).webp";
import Portfoliolist from "../portfoliolist/Portfoliolist";
import { Feature, WebApp, Design, Branding } from "../../data";
import { useEffect } from "react";

const Portfoilio = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("feature");

  useEffect(() => {
    switch (selected) {
      case "feature":
        setData(Feature);
        break;
      case "web":
        setData(WebApp);
        break;
      case "design":
        setData(Design);
        break;
      case "branding":
        setData(Branding);
        break;
      default:
        setData(Feature);
    }
  }, [selected]);

  const list = [
    { id: "feature", title: "Feature" },
    { id: "web", title: "Web App" },
    { id: "design", title: "Design" },
    { id: "branding", title: "Branding" },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item, index) => (
          <Portfoliolist
            key={index}
            id={item.id}
            active={selected === item.id}
            title={item.title}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d, index) => (
          <div className={`item`} key={index}>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfoilio;
