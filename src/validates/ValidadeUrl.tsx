import React, { useState } from 'react';
import '../App.css'

function ValidadeUrl(props:any) {
  const [validado, setValidado] = useState(false);
  const [mensagemError, setMensagemError] = useState('');
  function validating(event:any){
    if(props.required === true){
      
        try{
            const url = new URL(event.value)
            console.log(url)
            setValidado(true);
            if(url.host !== ""){ //A URL TEM QUE TER UM TIPO DE PROTOCOLO VALIDO, HTTP, HTTPS, FTP e etc...
                setMensagemError('URL valida') 
            }else{
                setMensagemError('URL invalida')
            }  
        }catch{
            setValidado(true);
            setMensagemError('URL invalida')
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

export default ValidadeUrl;