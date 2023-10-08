import React from "react";
import "../styling/bodyC.css";
import img1 from "../images/bodyC.png";

const BodyC = () => {
  return (
    <div className="bodyC">
      <div className="textSec">
        <h2>Start Your Journey To</h2>
        <h2>
          Become <b>Next Unicorn</b>
        </h2>
        <button className="btn">Hire Top 1% Developers Now</button>
      </div>
      <div className="imgSec">
        <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default BodyC;
