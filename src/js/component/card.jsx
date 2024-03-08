import React, { useState, useEffect } from "react";

// Function to build the card with the props
const CardTimer = ({ showCounter, counter, showFa, showNum }) => {
  return (
    <div className="card card-body">
      {showFa && <i className="fa fa-regular fa-clock " ></i>}
      {showNum && <p className="Num" >0</p>}
      {showCounter && <p>{counter}</p>}
     
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
    {  showCounter: false, showFa: true, showNum: false},
    {  showCounter: false, showNum: true },
    {  showCounter: false, showNum: true  },
    {  showCounter: false, showNum: true },
    {  showCounter: false, showNum: true },
    {  showCounter: false, showNum: true },
    {  showCounter: true, showNum: false }, // Show counter in the last element
  ];

  return (
    <div className="container DigitCard">
      {cardData.map((card, index) => (
        <CardTimer
          key={index}
          showCounter={index === cardData.length - 1} // Show counter only in the last element
          counter={counter}
          showFa={index === 0}
          showNum={index !== 0 && index!==cardData.length -1}
        />
      ))}
    </div>
  );
};

export default GenerateCards;
