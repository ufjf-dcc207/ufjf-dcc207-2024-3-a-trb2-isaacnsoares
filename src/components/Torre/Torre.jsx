import React from 'react';
import Disco from "../Disco/Disco.jsx"
import "./Torre.css";

const Torre = ({discos}) => {

  return (
    <div className='torre'>
      {discos.map((tamanho) => (
        <Disco key={tamanho} tamanho={tamanho} />
      ))}
    </div>
  );
};

export default Torre;