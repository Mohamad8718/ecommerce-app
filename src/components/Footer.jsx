import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__links">
          <Link to="#" className="footer__link">
            About
          </Link>
          <Link to="#" className="footer__link">
            Store Locator
          </Link>
          <Link to="#" className="footer__link">
            FAQs
          </Link>
          <Link to="#" className="footer__link">
            News
          </Link>
          <Link to="#" className="footer__link">
            Careers
          </Link>
          <Link to="#" className="footer__link">
            Contact us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
