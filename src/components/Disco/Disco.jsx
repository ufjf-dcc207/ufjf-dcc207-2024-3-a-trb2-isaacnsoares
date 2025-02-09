import React from "react";
import "./Disco.css";

const Disco = ({ tamanho }) => {
  return (
    <div className={`disco disco-${tamanho}`} draggable="false">
      {tamanho}
    </div>
  );
};

export default Disco