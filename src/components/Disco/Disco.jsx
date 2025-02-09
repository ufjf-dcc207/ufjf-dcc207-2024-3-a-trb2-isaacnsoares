import React from "react";
import "./Disco.css";

const Disco = ({ tamanho }) => {

  const levantarEArrastar = (e) => {
    // Faz com que o disco carregue seu tamanho
    e.dataTransfer.setData('tamanho', tamanho);
  };

  return (
  <div className={`disco disco-${tamanho}`} draggable levantarEarrastar={levantarEArrastar}>
    {tamanho}
  </div>
  );
};

export default Disco;
