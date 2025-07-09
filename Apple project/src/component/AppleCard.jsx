import React from "react";
import "./AppleCard.css";
import Link from "./link";

const AppleCard = ({
  image,
  title,
  subtitle,
  description,
  subtitleColor,
  descriptionColor,
  backgroundImage,
}) => {
  return (
    <div>
      <div>{backgroundImage}</div>
      {image && <img src={image} alt={title} className="apple-card-img" />}
      {title && <h2 className="apple-card-title">{title}</h2>}
      {subtitle && (
        <h3 className="apple-card-subtitle" style={{ color: subtitleColor }}>
          {subtitle}
        </h3>
      )}
      <p className="apple-card-description" style={{ color: descriptionColor }}>
        {description}
      </p>
      <div>
        <Link />
      </div>
    </div>
  );
};

export default AppleCard;
