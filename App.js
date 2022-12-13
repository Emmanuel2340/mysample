import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Portfoilio from "./components/portfolio/Portfoilio";
import Works from "./components/works/Works";
import Testmonial from "./components/testmonial/Testmonial";
import Contact from "./components/contact/Contact";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const activateMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="App">
      <Navbar openMenu={openMenu} onactivateMenu={activateMenu} />
      <Menu openMenu={openMenu} onactivateMenu={activateMenu} />
      <div className="section">
        <Home />
        <Portfoilio />
        <Works />
        <Testmonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
