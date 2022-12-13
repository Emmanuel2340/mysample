import React from "react";
import "./menu.scss";

const Menu = (props) => {
  const { openMenu, onactivateMenu } = props;
  return (
    <div className={"menu " + (openMenu && "active")}>
      <ul>
        <li onClick={onactivateMenu}>
          <a href="#home">home</a>
        </li>
        <li onClick={onactivateMenu}>
          <a href="#portfolio">portfolio</a>
        </li>
        <li onClick={onactivateMenu}>
          <a href="#works">works</a>
        </li>
        <li onClick={onactivateMenu}>
          <a href="#testmonial">testmonial</a>
        </li>
        <li onClick={onactivateMenu}>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
