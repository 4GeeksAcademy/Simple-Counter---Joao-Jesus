import React, { useState, useEffect } from "react";
import GenerateCards from "./card.jsx";


//include images into your bundle


//create your first component
const Home = () => {
  //State Concept
 
   const [counter, setCounter] = useState(0);
  
    useEffect(() => {
      console.log('Page is Loaded...!');
  
      setInterval(() => {
        setCounter((count) => count + 1);
      }, 1000); 
  }, []); 
  
    return (
      <div className="container">
       
        <GenerateCards counter={counter}/>
        
      </div>
    );
};
  

export default Home;
