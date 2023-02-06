import React from 'react';
import './App.css';
import ValidadeCPF from './validates/ValidadeCPF';
import ValidadeTelefone from './validates/ValidadeTelefone';
import ValidadeUrl from './validates/ValidadeUrl';
import ValidateString from './validates/ValidateString';

function App() {
  return (
    <ValidadeTelefone id='testing' className='input1' placeholder='Digite Aqui' required={true}/>
  );
}

export default App;
