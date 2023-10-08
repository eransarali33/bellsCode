import React from "react";
import "../styling/bodyH.css";
import img1 from "../images/bodyH.jpg";
import { BsFillRecordCircleFill } from "react-icons/bs";

const BodyH = () => {
  return (
    <div className="bodyH">
      <div className="imgSecH">
        <img src={img1} alt="image1" />
      </div>
      <div className="textSecH">
        <div className="h2Items">
          <h2>Deploy Developers through</h2>
          <h2>Bellscode</h2>
          <h2>
            <b>and get your project</b>
          </h2>
          <h2>
            <b>executed</b>
          </h2>
          <h2>within a day</h2>
        </div>
        <div className="pItems">
          <p>We offer comprehensive end-to-end solutions for all types of</p>
          <p>
            software and application development needs. Our approach involves
          </p>
          <p>deploying the most skilled and specialized teams to ensure the</p>
          <p>success of your project.</p>
        </div>
        <div className="iconItems">
          <div className="iconItems1">
            <h3>
              <BsFillRecordCircleFill className="icon" />
              Specify Your Requirements
            </h3>
            <p>Detail your specific requirements for the development of</p>
            <p>your IT project.</p>
          </div>
          <div className="iconItems2">
            <h3>
              <BsFillRecordCircleFill className="icon" />
              Meet with our project manager
            </h3>
            <p>Schedule a meeting with our dedicated Project</p>
            <p>Manager.</p>
          </div>
          <div className="iconItems3">
            <h3>
              <BsFillRecordCircleFill className="icon" />
              Discuss about budget and timelines
            </h3>
            <p>Let's have a discussion regarding budget and project</p>
            <p>timelines.</p>
          </div>
          <div className="iconItems4">
            <h3>
              <BsFillRecordCircleFill className="icon" />
              Get seamless execution
            </h3>
            <p>Bring your project life with our development</p>
            <p>expertise.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyH;
