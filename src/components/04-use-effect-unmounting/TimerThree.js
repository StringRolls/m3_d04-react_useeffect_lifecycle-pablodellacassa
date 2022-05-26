import React, { useState, useEffect } from "react";

function TimerThree() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect - Mounting (initial render)");
    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Return a "clean-up function" which will run automatically
    // before the component is removed from the DOM
    return () => {
      console.log("Cleanup - Component Unmounting");
      clearInterval(id);
    };
  }, []);

  return (
    <div className="Timer">
      <h2>Timer Three</h2>

      <h3>{count}</h3>
    </div>
  );
}

export default TimerThree;
