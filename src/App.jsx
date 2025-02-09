import React, { useState } from "react";
import "./App.css";
import Torre from "./components/Torre/Torre.jsx";

function App() {
  const [torres, setTorres] = useState([[1, 2, 3, 4, 5], [], []]);

  const [origem, setOrigem] = useState(0);
  const [destino, setDestino] = useState(1); // Inicializa para a próxima torre

  const moverDisco = () => {
    setTorres((torres) => {
      const disco = torres[origem][0];
      if (
        torres[origem].length > 0 &&
        (torres[destino].length === 0 || torres[destino][0] > disco)
      ) {
        const novasTorres = torres.map((torre, index) => {
          if (index === origem) {
            return torre.slice(1); // Remove o disco do topo da torre de origem
          }
          if (index === destino) {
            return [disco, ...torre]; // Adiciona o disco ao topo da torre de destino
          }
          return torre;
        });
        return novasTorres;
      }
      return torres;
    });
    if(torres == [[], [], [1, 2, 3, 4, 5]]){
      alert("Parabéns! Você ganhou.");
    }
  };

  const reiniciar = () => {
    setTorres([[1, 2, 3, 4, 5], [], []]);
  }

  return (
    <div className="app">
      <div className="torres">
        {torres.map((discos, index) => (
          <Torre key={index} discos={discos} />
        ))}
      </div>

      <div className="controles">
        <label>
          Torre de Origem:
          <select
            value={origem + 1}
            onChange={(e) => setOrigem(parseInt(e.target.value) - 1)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
        <label>
          Torre de Destino:
          <select
            value={destino + 1}
            onChange={(e) => setDestino(parseInt(e.target.value) - 1)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
        <button onClick={moverDisco}>Mover Disco</button>
        <button onClick={reiniciar}>Reiniciar</button>
      </div>
    </div>
  );
}

export default App;
