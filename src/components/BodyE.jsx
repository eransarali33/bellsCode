import React from "react";
import "../styling/bodyE.css";
import img1 from "../images/bodyE1.png";
import img2 from "../images/bodyE2.png";
import img3 from "../images/bodyE3.png";
import img4 from "../images/bodyE4.png";
import img5 from "../images/bodyE5.png";

const BodyE = () => {
  return (
    <div className="bodyE">
      <div className="textSecE">
        <h2>Featured In</h2>
      </div>
      <div className="imgSecE">
        <img src={img1} alt="image1" />
        <img src={img2} alt="image2" />
        <img src={img3} alt="image3" />
        <img src={img4} alt="image4" />
        <img src={img5} alt="image5" />
      </div>
    </div>
  );
};

export default BodyE;
