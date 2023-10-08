import React from "react";
import "../styling/bodyD.css";
import img2 from "../images/bodyD2.png";
import img1 from "../images/bodyD1.png";

const BodyD = () => {
  return (
    <div className="bodyD">
      <div className="textSecD">
        <div className="h1Items">
          <h2>Build Technology by</h2>
          <h2>deploying professionals</h2>
          <h2>as your own</h2>
        </div>
        <div className="pItemsD">
          <p>"Embark on your journay right away with unmatched</p>
          <p>assistance."</p>
        </div>
        <div className="imgItems">
          <img src={img2} alt="image2" />
        </div>
        <div className="popItems">
          <h2>Popular Searches:</h2>
          <span className="popA">
            <p>Python Developers</p>
            <p>Full Stack Developers</p>
            <p>Salesforce Developers</p>
          </span>
          <span className="popB">
            <p>NodeJs Developers</p>
            <p className="popBItems">AI Engineers</p>
            <p className="popBItems popBItems2">ML Engineers</p>
          </span>
        </div>
      </div>
      <div className="imgSecD">
        <img src={img1} alt="image1" />
      </div>
    </div>
  );
};

export default BodyD;
