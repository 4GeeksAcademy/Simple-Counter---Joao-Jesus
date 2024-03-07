import React, { useState, useEffect } from "react";


const CardTimer = ({ imageUrl, showCounter, counter }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={imageUrl} alt="Card" />
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
    { imageUrl: "actualImageUrl1", showCounter: false },
    { imageUrl: "actualImageUrl2", showCounter: false },
    { imageUrl: "actualImageUrl3", showCounter: false },
    { imageUrl: "actualImageUrl4", showCounter: false },
    { imageUrl: "actualImageUrl5", showCounter: false },
    { imageUrl: "actualImageUrl6", showCounter: true }, // Show counter in the last element
  ];

  return (
    <div className="container DigitCard">
      {cardData.map((card, index) => (
        <CardTimer
          key={index}
          imageUrl={card.imageUrl}
          showCounter={index === cardData.length - 1} // Show counter only in the last element
          counter={counter}
        />
      ))}
    </div>
  );
};

export default GenerateCards;
