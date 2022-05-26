import { useState } from "react";
import "./App.css";
// import Counter from "./components/01-use-state/Counter";
// import Timer from "./components/02-use-state-loop/Timer";

import TimerTwo from "./components/03-use-effect-mounting/TimerTwo";   // <== IMPORT

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        { show ? "Hide" : "Show"}
      </button>
      {/* {show && <Counter />} */}
      {/* {show && <Timer />} */}

      {show && <TimerTwo />}                 {/*  <== ADD  */}
    </div>
  );
}

export default App;
