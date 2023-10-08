import React from "react";
import "../styling/header.css";
import img1 from "../images/header.png";
import { BiSolidLockAlt } from "react-icons/bi";

const Header = () => {
  return (
    <div className="header-sec">
      <span className="nav">
        <span className="compName">Bellscode</span>
        <div className="btnsA">
          <button className="btn1">
            <BiSolidLockAlt /> login
          </button>
          <button className="btn2">Hire Now</button>
          <button className="btn3">Get Quote</button>
        </div>
      </span>
      <div className="header-txt">
        <h1>
          Hire Top 1% <br /> Software | Website | App Developers
        </h1>

        <p>
          Revolutionize your digital presence with AI-powered solutions and a
          <br /> stellar team for timely, impeccable results.
        </p>
        <span className="btnsB">
          <button className="btn1B">Talk to sales</button>
          <button className="btn2B">Request a Quote</button>
        </span>
        <div className="headerImg">
          <img src={img1} alt="headerImg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
