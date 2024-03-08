import React, { useState, useEffect } from "react";

// Function to build the card with the props
const CardTimer = ({ showCounter, counter, showFa }) => {
  return (
    <div className="card color: Tomato">
      {showFa && <i className="fa fa-regular fa-clock " ></i>}
      
      <div className="card-body">
        {showCounter && <p>{counter}</p>}
      </div>
    </div>

    
  );
  
  
};

const GenerateCards = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const cardData = [
    {  showCounter: false, showFa: true },
    {  showCounter: false },
    {  showCounter: false },
    { showCounter: false },
    {  showCounter: false },
    {  showCounter: false },
    {  showCounter: true }, // Show counter in the last element
  ];

  return (
    <div className="container DigitCard">
      {cardData.map((card, index) => (
        <CardTimer
          key={index}
          showCounter={index === cardData.length - 1} // Show counter only in the last element
          counter={counter}
          showFa={index === 0}
        />
      ))}
    </div>
  );
};

export default GenerateCards;
