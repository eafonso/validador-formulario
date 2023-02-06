import React, { useState } from 'react';
import '../App.css'

function ValidadeTelefone(props:any) {
  const [invalido, setInvalido] = useState(false);
  const [mensagemError, setMensagemError] = useState('');
  function validating(event:any){
    if(props.required === true){
        const telefone = event.value.replaceAll('(','').replaceAll(')','').replaceAll('-','').replaceAll(' ','') //Retirar todos os caracteres para fazer a validação.
        console.log(telefone.match(/^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/g));
        const regexValidarDDD = /^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/g;
        if(!telefone.match(regexValidarDDD)){
            setInvalido(true);
            setMensagemError("Telefone Invalido!")
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

export default ValidadeTelefone;