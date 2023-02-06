import React, { useState } from 'react';
import '../App.css'

function ValidateString(props:any) {
  const [validado, setValidado] = useState(false);
  const [mensagemError, setMensagemError] = useState('');
  function validating(event:any){
    const tamanho = event.value.length;
    const min = props.min || 0;
    const max = props.max || 0;
    if(props.required === true){
      if(tamanho === 0){
        setValidado(true);
        setMensagemError('O campo é obrigatorio!');
      }else if(tamanho < min){
        setValidado(true);
        setMensagemError('Tamanho minimo não atingido!');
      }else if(max !== 0 && tamanho > max){
        setValidado(true);
        setMensagemError('Tamanho máximo ultrapassado!');
      }else{
        setValidado(false)
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
      {validado && <span className='error_message'>{mensagemError}</span>}
    </div>
  );
}

export default ValidateString;