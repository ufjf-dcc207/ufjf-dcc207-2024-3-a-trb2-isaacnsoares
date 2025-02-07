import React from 'react';
import Disco from "../Disco/Disco.jsx"
import "./Torre.css";

const Torre = () => {

  return (
    <div className='torre'>
      <Disco tamanho={1}/>
      <Disco tamanho={2}/>
      <Disco tamanho={3}/>
      <Disco tamanho={4}/>
      <Disco tamanho={5}/>
    </div>
  );
};

export default Torre;