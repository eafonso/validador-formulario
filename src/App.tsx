import React from 'react';
import './App.css';
import ValidadeCPF from './validates/ValidadeCPF';
import ValidadeCNPJ from './validates/ValidadeCPNJ';
import ValidadeData from './validates/ValidadeData';
import ValidadeTelefone from './validates/ValidadeTelefone';
import ValidadeUrl from './validates/ValidadeUrl';
import ValidateString from './validates/ValidateString';

function App() {
  return (
    <ValidadeData id='testing' className='input1' placeholder='Digite Aqui' required={true}/>
  );
}

export default App;
