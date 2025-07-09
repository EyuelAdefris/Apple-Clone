import React from "react";
import watchSers5Img from "../assets/icon/watch-series5-logo.png";
import AppleCard from "../assets/icon/apple-card-logo.png";
import Link from "./link";
import "../style/card1.css";

const WatchAndCards = () => {
  return (
    <div className="promo-row">
      {/* Watch Series 5 Card */}
      <div className="watch-promo-container">
        <div className="promo-content">
          <div className="img-wrapper">
            <img
              src={watchSers5Img}
              alt="Watch Series 5 Logo"
              className="watch-logo"
            />
          </div>
          <p className="promo-text">
            with the new Always-on Retina display you've never seen a watch like
            this.
          </p>
          <div className="links-wrapper">
            <Link />
          </div>
        </div>
      </div>

      {/* Apple Card */}
      <div className="watch-promo-container apple-card">
        <div className="promo-content">
          <div className="img-wrapper">
            <img src={AppleCard} alt="Apple Card Logo" className="watch-logo" />
          </div>
          <p className="promo-text">
            Get 3% Daily Cash on Purchase from Apple using Apple Card.
          </p>
          <div className="links-wrapper">
            <Link />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchAndCards;
