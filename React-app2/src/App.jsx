import { useState } from "react";
import "./App.css";

function App() {
  // state to store the selected color
  const [color, setColor] = useState("");

  return (
    <div className="container">
      <h1>Color Changer App</h1>

      <div className="buttons">
        <button className="btn red" onClick={() => setColor("red")}>Red</button>
        <button className="btn green" onClick={() => setColor("green")}>Green</button>
        <button className="btn blue" onClick={() => setColor("blue")}>Blue</button>
      </div>

      <div className="box" style={{ backgroundColor: color || "#e0e0e0" }}>
        <h2>{color ? `Selected Color: ${color}` : "No color selected"}</h2>
      </div>
    </div>
  );
}

export default App;