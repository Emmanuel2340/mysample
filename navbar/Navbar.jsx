import { Person } from "@material-ui/icons";
import { Mail } from "heroicons-react";
import "./navbar.scss";

const Navbar = (props) => {
  const { openMenu, onactivateMenu } = props;

  return (
    <nav className={openMenu ? "active" : "nav"}>
      <div className="nav_wrapper">
        <div className="left">
          <a href="#home" className="logo">
            richard.
          </a>
          <div className="navContainer">
            <Person className="icon" />
            <span>08028391376</span>
          </div>
          <div className="navContainer">
            <Mail className="icon" />
            <span>chijiokerichard61@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={onactivateMenu}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
