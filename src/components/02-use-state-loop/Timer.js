import React, { useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  // 1. setInterval continuously calls `setCount` that updates the state
  // 2. Each time the state updates component re-renders
  // 3. When component re-renders, code runs again and creates a new setInterval timer
  // 4. This way multiple setIntervals are created causing an increasing
  //    amount of re-renders until there is too many and component crashes.

  setInterval(() => {
    setCount(count + 1);
  }, 1000);


  return (
    <div className="Timer">
      <h2>Timer</h2>

      <h3>{count}</h3>
    </div>
  );
}

export default Timer;
