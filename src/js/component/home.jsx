import React from "react";
import GenerateCards from "./card.jsx";
import ClockComponent from "./clock.jsx"


//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return ( 
	  <div>
		<ClockComponent seconds={counter} />
		<GenerateCards imageUrl="http://via.placeholder.com/350x150" title="A nice image" /> 
	  </div>
	);
  };
  


export default Home;
