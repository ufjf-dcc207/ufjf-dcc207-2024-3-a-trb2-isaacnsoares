import React from 'react';
import Disco from "../Disco/Disco.jsx"
import "./Torre.css";

const Torre = ({discos, soltarDisco}) => {

  const soltar = (e) => {
    // Impede o comportamento padrão do navegador
    e.preventDefault();
    // Pega o tamanho do disco arrastado
    const discoTamanho = e.dataTransfer.getData('tamanho');
    // Solta o disco usando uma função passada pelo App
    soltarDisco(discoTamanho);
  }

  const arrastarSobre = (e) => {
    // Torna o elemento válido para receber coisas arrastadas
    e.preventDefault();
  }

  return (
    <div className='torre' soltarDisco={soltar} arrastandoSobre={arrastarSobre}>
      <div className="torre-base"></div>
      {discos.map((tamanho) => (
        <Disco key={tamanho} tamanho={tamanho} />
      ))}
    </div>
  );
};

export default Torre;