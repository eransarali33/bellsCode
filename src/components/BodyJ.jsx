import React from "react";
import "../styling/bodyJ.css";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import img1 from "../images/bodyJ1.png";
import img2 from "../images/bodyJ2.png";
import img3 from "../images/bodyJ3.png";
import img4 from "../images/bodyJ4.png";
import img5 from "../images/bodyJ5.png";
import img6 from "../images/bodyJ6.png";
import img7 from "../images/bodyJ7.png";
import img8 from "../images/bodyJ8.png";
import img9 from "../images/bodyJ9.png";
import img10 from "../images/bodyJ10.png";
import img11 from "../images/bodyJ11.png";
import img12 from "../images/bodyJ12.png";

const BodyJ = () => {
  let currentIndex = 0;
  let interval;

  function scrollRight() {
    currentIndex = (currentIndex + 1) % (12 - 3);
    updateScroll();
  }

  function scrollLeft() {
    currentIndex = (currentIndex - 1 + 12 - 3) % (12 - 3);
    updateScroll();
  }

  function updateScroll() {
    const imgContainer = document.querySelector(".imgSecJ");
    const offset = currentIndex * (24 + 1) * -1;
    imgContainer.style.transform = `translateX(${offset}%)`;
  }

  function startAutoScroll() {
    interval = setInterval(scrollRight, 3000);
  }

  function stopAutoScroll() {
    clearInterval(interval);
  }

  startAutoScroll();

  return (
    <div className="bodyJ">
      <h2 className="textSecJ">
        Our <b>Team</b>
      </h2>
      <div className="imgWithArr">
        <MdOutlineArrowBackIosNew id="icon1" onClick={scrollLeft} />
        <span className="imgSecJ">
          <img src={img1} alt="image1" />
          <img src={img2} alt="image2" />
          <img src={img3} alt="image3" />
          <img src={img4} alt="image4" />
          <img src={img5} alt="image5" />
          <img src={img6} alt="image6" />
          <img src={img7} alt="image7" />
          <img src={img8} alt="image8" />
          <img src={img9} alt="image9" />
          <img src={img10} alt="image10" />
          <img src={img11} alt="image11" />
          <img src={img12} alt="image12" />
        </span>
        <MdOutlineArrowForwardIos id="icon2" onClick={scrollRight} />
      </div>
    </div>
  );
};

export default BodyJ;
