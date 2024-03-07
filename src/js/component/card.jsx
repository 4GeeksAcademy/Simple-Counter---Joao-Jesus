import React from "react";


const CardTimer = (props) => {
  return (
   
    <div className="card">
      <img className="card-img-top" src={props.imageUrl} alt={`${props.title}`} />
      
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5> 
      </div>
    </div>
    
  );
};

const GenerateCards = () => {
  const cardData = [
    { imageUrl: "http://via.placeholder.com/350x150", title: "" },
    { imageUrl: "actualImageUrl2", title: "" },
    { imageUrl: "actualImageUrl3", title: "0" },
    { imageUrl: "actualImageUrl4", title: "0" },
    { imageUrl: "actualImageUrl5", title: "" },
    { imageUrl: "actualImageUrl6", title: "Card 6" },
    { imageUrl: "actualImageUrl7", title: "Card 7" },
    ];

  return (
    <div className="container DigitCard">
      {cardData.map((card, index) => (
        <CardTimer key={index} imageUrl={cardData.imageUrl} title={card.title} />
      ))}
    </div>
  );
};

export default GenerateCards;