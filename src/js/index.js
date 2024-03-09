// import React and other required modules
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

// Define your component
function MyCounter(props) {
  return (
    <div className="Timer">
      <div className="Clock">
        <i className="far fa-clock"></i>
      </div>
      <div className="six">{props.digitSix}</div>
      <div className="five">{props.digitFive}</div>
      <div className="four">{props.digitFour}</div>
      <div className="three">{props.digitThree}</div>
      <div className="two">{props.digitTwo}</div>
      <div className="one">{props.digitOne}</div>
    </div>
  );
}

// Define propTypes for your component
MyCounter.propTypes = {
  digitSix: PropTypes.number,
  digitFive: PropTypes.number,
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number,
};

// Initialize counter state
let counter = 0;

// Use setInterval to update the counter and render the component
setInterval(() => {
  const one = Math.floor(counter % 10);
  const two = Math.floor((counter / 10) % 10);
  const three = Math.floor((counter / 100) % 10);
  const four = Math.floor((counter / 1000) % 10);
  const five = Math.floor((counter / 10000) % 10);
  const six = Math.floor((counter / 100000) % 10);

  ReactDOM.render(
    <MyCounter
      digitOne={one}
      digitTwo={two}
      digitThree={three}
      digitFour={four}
      digitFive={five}
      digitSix={six}
    />,
    document.querySelector("#app")
  );

  counter++;
}, 1000);

//render your react application

    