import "./App.css";
import Torre from "./components/Torre/Torre.jsx";
import { useState } from "react";

function App() {
  const [torres, setTorres] = useState([
    [5, 4, 3, 2, 1], 
    [], 
    []
  ]);

  const moverDisco = (origemIndex, destinoIndex) => (discoTamanho) => {
    setTorres((torres) => {
      //cria uma nova matriz, fazendo as mudanças necessárias
      const novasTorres = torres.map((torre, index) => {
        // Se for a torre de origem, cria outra sem o devido disco
        if (index == origemIndex) {
          return torre.filter((tamanho) => tamanho !== parseInt(discoTamanho));
        }
        // Se for a torre de destino, adiciona o devido disco
        if (index == destinoIndex) {
          return [parseInt(discoTamanho), ...torre];
        }
        return torre;
      });
      return novasTorres;
    })
  }

  const soltar = (origemIndex) => (discoTamanho) => {
    setTorres((torres) => {
      // Encontra a torre de destino
      const destinoIndex = torres.findIndex(
        (torre) => torre.length == 0 || torre[0] > parseInt(discoTamanho)
      );
      // Garante que a torre de destino existe e não é a mesma de origem
      if (destinoIndex != -1 && destinoIndex != origemIndex) {
        moverDisco(origemIndex, destinoIndex)(discoTamanho);
      }
    });
  };

  return (
    <>
      <div className="app">
        {torres.map((discos, index) => (
          <Torre key={index} discos={discos} soltarDisco={soltar(index)}/>
        ))}
      </div>
    </>
  );
}

export default App;
