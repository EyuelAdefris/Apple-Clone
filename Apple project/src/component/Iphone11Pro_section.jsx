import React from "react";
import { Container } from "react-bootstrap";
import "../style/Iphone11_pro.css";
import Link from "./link";
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
        <Link />
      </Container>
    </div>
  );
};

export default IphonePro;
