import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Contexts/GlobalContext";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";

const Navbar = () => {
  const { state, toggleTheme } = useContext(GlobalContext);

  return (
    <nav>
      <div className="logo">DH🦷Odonto</div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/favs">Destacados</Link>
        <Link to="/contact">Contacto</Link>
        <div className="theme-toggle" onClick={toggleTheme}>
          {state.theme === "light" ? <BsToggleOff /> : <BsToggleOn />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
