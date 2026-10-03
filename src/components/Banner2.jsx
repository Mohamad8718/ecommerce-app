import React from "react";
import Banner2Img from "../assets/banner-2.jpg";
import { Link } from "react-router-dom";

const Banner2 = () => {
  return (
    <section id="banner-2">
      <div className="container">
        <div className="row">
          <div className="banner banner-2">
            <div className="banner__text">
              <h2 className="banner__text__title">
                Comfortable & Elegante Living
              </h2>
              <p className="banner__text__paragraph">
                RAOUF Products are all made to standard sizes so that you can
                mix and match them freely.
              </p>
              <Link to="/products" className="banner__text__btn">
                Shop Now
              </Link>
            </div>
            <img src={Banner2Img} alt="" className="banner__img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
