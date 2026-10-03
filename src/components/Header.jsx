import React from "react";
import HomeImg1 from "../assets/home-img-1.jpg";
import HomeImg2 from "../assets/home-img-2.jpg";
import HomeImg3 from "../assets/home-img-3.jpg";
import HomeImg4 from "../assets/home-img-4.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row header__row">
          <h1 className="header__title">
            Welcome to <span className="color-primary">Samurai Store</span>
          </h1>
          <div className="header__grid-container">
            <Link to="/products" className="header__grid">
              <h2 className="header__grid__title">Live Comfortably</h2>
              <img src={HomeImg1} alt="" className="header__grid__img" />
            </Link>
            <Link to="/products" className="header__grid">
              <h2 className="header__grid__title">Skin Care</h2>
              <img src={HomeImg2} alt="" className="header__grid__img" />
            </Link>
            <Link to="/products" className="header__grid">
              <h2 className="header__grid__title">Kitchen</h2>
              <img src={HomeImg3} alt="" className="header__grid__img" />
            </Link>
            <Link to="/products" className="header__grid">
              <h2 className="header__grid__title">Electronics</h2>
              <img src={HomeImg4} alt="" className="header__grid__img" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
