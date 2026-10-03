import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav className={`menu ${menuOpen && "menu-open"}`}>
      <button className="menu__close" onClick={() => setMenuOpen(false)}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div className="menu__links">
        <Link to="/" className="menu__link">
          Home
        </Link>
        <Link to="/products" className="menu__link">
          Products
        </Link>
        <button className="menu__link menu__cart">Cart</button>
      </div>
    </nav>
  );
};

export default Menu;
