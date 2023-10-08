import React from "react";
import "../styling/bodyB.css";
import { AiFillCheckCircle } from "react-icons/ai";

const BodyB = () => {
  return (
    <div className="bodyB">
      <div className="txtSec">
        <h1>Revolutionize</h1>
        <h1>technology</h1>
        <br />
        <p>Elevate Your Website | Software & App</p>
        <p>Development with Intelligent Software Solutions.</p>
        <h2>
          We work on all <b>Tech Stacks</b>
        </h2>
        <p>
          <AiFillCheckCircle className="icons" /> Having a dedicated team of
          330+ engineers
        </p>
        <p>
          <AiFillCheckCircle className="icons" /> Covering all the tech stacks
        </p>
        <p>
          <AiFillCheckCircle className="icons" /> Custom development solutions
        </p>
      </div>

      <div className="formSec">
        <h1>
          Need <b>Quote</b>
        </h1>
        <h2>
          Help us <b>with your details</b>
        </h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email Address" />
        <input type="number" placeholder="Phone" />
        <button>Submit</button>
        <p>NO Credit Card Required. Unlimited Users.</p>
      </div>

      <span></span>
    </div>
  );
};

export default BodyB;
