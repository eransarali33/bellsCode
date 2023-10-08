import React, { useState, useEffect } from "react";
import "../styling/bodyA.css";
import img1 from "../images/bodyA1.png";
import img2 from "../images/bodyA2.png";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

const BodyA = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === 1 ? 2 : 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bodyA">
      <span className="imgs">
        <img
          src={currentImage === 1 ? img1 : img2}
          alt={`Image${currentImage}`}
        />
      </span>
      <div className="box">
        <h1>Building technology solutions for</h1>
        <p>
          Real Estate <AiOutlineArrowRight className="icons" /> Ed-Tech{" "}
          <AiOutlineArrowRight className="icons" />
          E-commerce <AiOutlineArrowRight className="icons" /> Hospitality{" "}
          <AiOutlineArrowRight className="icons" /> AI & ML{" "}
          <AiOutlineArrowRight className="icons" /> D2C Market
        </p>
      </div>
    </div>
  );
};

export default BodyA;
