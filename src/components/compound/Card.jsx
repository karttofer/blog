import React from "react";

const Title = ({ text }) => {
  return <h1 className="card-title">{text}</h1>;
};

const SubTitle = ({ text }) => {
  return <p className="card-subtitle">{text}</p>;
};

const Img = ({ src, alt }) => {
  return <img className="card-img" src={src} alt={alt} />;
};

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

Card.Title = Title;
Card.Subtitle = SubTitle;
Card.Img = Img;

export default Card;
