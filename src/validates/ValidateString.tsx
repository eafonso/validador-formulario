import React, { useState } from 'react';
import '../App.css'

function ValidateString(props:any) {
  const [invalido, setInvalido] = useState(false);
  const [mensagemError, setMensagemError] = useState('');
  function validating(event:any){
    const tamanho = event.value.length;
    const min = props.min || 0;
    const max = props.max || 0;
    if(props.required === true){
      if(tamanho === 0){
        setInvalido(true);
        setMensagemError('O campo é obrigatorio!');
      }else if(tamanho < min){
        setInvalido(true);
        setMensagemError('Tamanho minimo não atingido!');
      }else if(max !== 0 && tamanho > max){
        setInvalido(true);
        setMensagemError('Tamanho máximo ultrapassado!');
      }else{
        setInvalido(false)
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

export default ValidateString;