import "./App.css";
import Torre from "./components/Torre/Torre.jsx";
import { useState } from "react";

function App() {
  const [torres, setTorres] = useState([
    [5, 4, 3, 2, 1], 
    [], 
    []
  ]);

  return (
    <>
      <div className="app">
        {torres.map((discos, index) => (
          <Torre key={index} discos={discos}/>
        ))}
      </div>
    </>
  );
}

export default App;
