import React from "react";
import { Button, Image } from "react-bootstrap";
import MacBookImage from "../assets/home/macbookair-new.jpg";
import "../style/MacBookPro.css";

const MacBookPromo = () => {
  return (
    <div className="macbook-promo">
      <div className="content-wrapper">
        <div className="text-content">
          <span className="model-text-mac">16-inch model</span>
          <h1 className="product-name">MacBook Pro</h1>
          <p className="tagline">The best for the brightest</p>
          <div className="cta-buttons">
            <Button variant="outline-primary" className="learn-more-btn">
              Learn more
            </Button>
            <Button variant="outline-primary" className="buy-now">
              Buy
            </Button>
          </div>
        </div>
        <div className="product-image-container">
          <Image
            src={MacBookImage}
            alt="16-inch MacBook Pro"
            fluid
            className="product-image"
          />
        </div>
      </div>
    </div>
  );
};

export default MacBookPromo;
