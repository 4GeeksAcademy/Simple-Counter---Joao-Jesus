import React, { useState, useEffect } from "react";


const CardTimer = ({  showCounter, counter }) => {
  return (
    <div className="card">
      
      <i class="fa fa-clock"></i>
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
    { showCounter: false },
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
        />
      ))}
    </div>
  );
};

export default GenerateCards;
