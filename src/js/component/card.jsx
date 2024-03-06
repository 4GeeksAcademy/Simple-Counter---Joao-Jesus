import React from "react";


const CardTimer = (props) => {
  return (
    <div className="card">
      <img className="card-img-top" src={props.imageUrl} alt={`Card image - ${props.title}`} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">Some quick example text to build on the card title and fill the card's content.</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

const GenerateCards = () => {
  const cardData = [
    { imageUrl: "actualImageUrl1", title: "Card 1" },
    { imageUrl: "actualImageUrl2", title: "Card 2" },
    
  ];

  return (
    <div>
      {cardData.map((card, index) => (
        <CardTimer key={index} imageUrl={card.imageUrl} title={card.title} />
      ))}
    </div>
  );
};

export default GenerateCards;