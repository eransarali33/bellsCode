import React from "react";
import "../styling/bodyG.css";
import img1 from "../images/bodyG.png";
import { FaDotCircle } from "react-icons/fa";

const BodyG = () => {
  return (
    <div className="bodyG">
      <p>
        <FaDotCircle className="icon" />
        Join 900+ companies who have trusted Bellscode for their remote
        engineering needs.
      </p>
      <img src={img1} alt="image1" />
      <button className="btnG">Hire Now</button>
    </div>
  );
};

export default BodyG;
