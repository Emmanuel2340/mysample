import React from "react";
import "./portfoliolist.scss";

const Portfoliolist = (props) => {
  const { title, id, setSelected, active } = props;
  return (
    <li
      className={active ? "portfoliolist active" : "portfoliolist"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default Portfoliolist;
