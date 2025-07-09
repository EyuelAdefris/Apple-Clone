import React from "react";
import { Button, Container } from "react-bootstrap";
import Link from "./link";
import "../style/Iphone11.css";

const Iphone11 = () => {
  return (
    <div className="iphone-11-wrapper">
      <Container className="iphone-11-content text-center">
        <div className="model-text-11">
          <span className="">iphone 11</span>
        </div>
        <h2 className="Discription-wrapper11 mb-2">
          Just the right amount of everything.
        </h2>
        <div className="price-text">
          <p>from $16.62/mo. $399 with trade-in.</p>
        </div>
        <Link />
      </Container>
    </div>
  );
};

export default Iphone11;
