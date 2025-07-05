import React from "react";
import { Button, Container } from "react-bootstrap";
import "../style/Iphone11_pro.css";

const IphonePro = () => {
  return (
    <div className="iphone-promo-wrapper">
      <Container className="iphone-promo-content text-center">
        <div className="model-text">
          <span className="">iphone 11 Pro</span>
        </div>
        <h2 className="Discription-wrapper mb-2">
          Pro cameras. Pro display. Pro performance.
        </h2>
        <div className="price-text">
          <p>From $24.95/mo. or $599 with trade‑in.</p>
        </div>
        <div className="cta-buttons">
          <Button variant="outline-primary" className="learn-more-btn">
            Learn more
          </Button>
          <Button variant="outline-primary" className="buy-now">
            Buy
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default IphonePro;
