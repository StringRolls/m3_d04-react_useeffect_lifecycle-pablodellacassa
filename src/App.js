import { useState } from "react";
import "./App.css";
import Counter from "./components/01-use-state/Counter";    // <== IMPORT

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        { show ? "Hide" : "Show"}
      </button>
      {show && <Counter />}                       {/*  <== ADD  */}
    </div>
  );
}

export default App;
