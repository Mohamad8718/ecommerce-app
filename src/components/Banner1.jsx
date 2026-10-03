import React from "react";
import Banner1Img from "../assets/banner-1.jpg";
import { Link } from "react-router-dom";

const Banner1 = () => {
  return (
    <section id="banner-1">
      <div className="container">
        <div className="row">
          <div className="banner">
            <div className="banner__text">
              <h2 className="banner__text__title">
                Creative harmonious living
              </h2>
              <p className="banner__text__paragraph">
                RAOUF Products are all made to standard sizes so that you can
                mix and match them freely.
              </p>
              <Link to="/products" className="banner__text__btn">
                Shop Now
              </Link>
            </div>
            <img src={Banner1Img} alt="" className="banner__img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner1;
