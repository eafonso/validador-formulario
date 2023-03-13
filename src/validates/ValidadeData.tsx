import React, { useState } from 'react';
import '../App.css'

function ValidadeData(props:any) {
    const [invalido, setInvalido] = useState(false);
    const [mensagemError, setMensagemError] = useState('');
    function validating(event:any){
      if(props.required === true){
        const tratarString = event.value.split('/')
        const data = new Date(tratarString[2] + '-' + tratarString[1] + '-' + tratarString[0])
        console.log(data.valueOf())
        if(!data.valueOf()){ //Se não for uma data valida o valueOf() retorna NaN
            setInvalido(true)
            setMensagemError('Data Invalida!')
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
  
  export default ValidadeData;