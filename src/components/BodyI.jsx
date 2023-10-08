import React from "react";
import "../styling/bodyI.css";
import { GoDotFill } from "react-icons/go";

const BodyI = () => {
  return (
    <div className="bodyI">
      <h2 className="h2SecI">
        Leading by <b>examples</b>
      </h2>
      <span className="textSecI">
        <div className="textSecI1">
          <GoDotFill className="icon1" />
          <h2>7+ Countries</h2>
          <p>Global Reach</p>
        </div>
        <div className="textSecI2">
          <GoDotFill className="icon2" />
          <h2>10k+ Projects</h2>
          <p>Delivered Globally</p>
        </div>
        <div className="textSecI3">
          <GoDotFill className="icon3" />
          <h2>300+ Team</h2>
          <p>Experienced Professionals</p>
        </div>
      </span>
    </div>
  );
};

export default BodyI;
