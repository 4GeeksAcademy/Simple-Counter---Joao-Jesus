 import React from "react";

 function ClockComponent() {
    const [counter, setCounter] = useState(0);
  
    useEffect(() => {
      console.log('Page is Loaded...!');
  
      const intervalId = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
  
      // Clear the interval when the component unmounts or when the dependency array changes
      return () => clearInterval(intervalId);
    }, []); // Empty dependency array means the effect runs only once on mount
  
    return (
      <div>
        <p>Counter: {counter}</p>
        {/* Other components or UI elements */}
      </div>
    );
  }
  




 export default ClockComponent;