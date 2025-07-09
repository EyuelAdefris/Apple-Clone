import React from "react";
import TvLogo from "../assets/icon/apple-tv-logo.png";
import ServantLogo from "../assets/icon/servant-logo.png";
// import AirpodsImage from "../assets/icon/airpods-pro.png";
// import TvBackground from "../assets/home/apple-tv-background.jpg";
// import AirpodsBackground from "../assets/home/airpods-background.jpg";
import Link from "./link";
import "../style/card1.css";

const PromoCard = () => {
  return (
    <div className="promo-row">
      {/* Apple TV+ Card */}
      <div className="promo-container tv-promo">
        <div className="promo-content">
          <div className="logo-stack">
            <img src={TvLogo} alt="Apple TV+" className="tv-logo" />
            <img src={ServantLogo} alt="Servant" className="servant-logo" />
          </div>

          <div className="trailer-link">
            <a href="#">It's the trailer</a>
          </div>
        </div>
      </div>

      {/* AirPods Pro Card */}
      {/* <div className="promo-container airpods-promo">
        <div className="promo-content">
          <h2 className="product-title">AirPods Pro</h2>
          <p className="product-tagline">Magic like you've never heard.</p>
          <div className="links-wrapper">
            <Link />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default PromoCard;
