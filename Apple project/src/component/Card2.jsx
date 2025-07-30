import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import TvLogo from "../assets/icon/apple-tv-logo.png";
import ServantLogo from "../assets/icon/servant-logo.png";
import Link from "./link";
import "../style/card2.css";

const PromoCard = () => {
  return (
    <div className="promo-row">
      <div className="promo-container tv-promo">
        <div className="promo-content">
          <div className="logo-stack">
            <img src={TvLogo} alt="Apple TV+" className="tv-logo" />
            <img src={ServantLogo} alt="Servant" className="servant-logo" />
          </div>

          <a href="#" className="play-link">
            <span>Watch the trailer</span>
            <FontAwesomeIcon icon={faCirclePlay} className="play-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
