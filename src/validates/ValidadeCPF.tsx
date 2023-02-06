import React, { useState } from 'react';
import '../App.css'
import validacaoCPF from '../functions/validarCPF';
import verificarNumerosRepetidos from '../functions/verificarNumerosRepetidos';

function ValidadeCPF(props:any) {
  const [invalido, setInvalido] = useState(false);
  const [mensagemError, setMensagemError] = useState('');
  function validating(event:any){
    if(props.required === true){
        const cpf = event.value.replaceAll('.','').replaceAll('-','') //Retirar ponto e traço para facilitar a verificação
        if(cpf.length !== 11){
            setInvalido(true);
            setMensagemError('Verificar tamanho do CPF!')
        }else if(verificarNumerosRepetidos(cpf) || !validacaoCPF(cpf)){
            setInvalido(true);
            setMensagemError('CPF INVALIDO!')
        }else{
            setInvalido(false);
        }
    }else{
      alert('Ficou como falso')
    }
  }
  return (
    <div className='componentString'>
      <input
        id = {props.id} 
        className = {props.className}
        placeholder={props.placeholder}
        onClick={e => validating(e.target)}
        onChange={e => validating(e.target)}
        onBlur={e => validating(e.target)}
      />
      {invalido && <span className='error_message'>{mensagemError}</span>}
      
    </div>
  );
}

export default ValidadeCPF;