import React, { useState } from 'react';
import '../App.css'
import validacaoCNPJ from '../functions/validarCNPJ';
import verificarNumerosRepetidosCNPJ from '../functions/verificarNumerosRepetidosCNPJ';

function ValidadeCNPJ(props:any) {
    const [invalido, setInvalido] = useState(false);
    const [mensagemError, setMensagemError] = useState('');
    function validating(event:any){
        const cnpj = event.value.replaceAll('.','').replaceAll('/','').replaceAll('-','');
        if(cnpj.length !== 14){
          setInvalido(true)
          setMensagemError("Verificar tamanho do CNPJ")
        }else if(verificarNumerosRepetidosCNPJ(cnpj) || !validacaoCNPJ(cnpj)){
          setInvalido(true)
          setMensagemError("CNPJ invalido!")
        }else{
          setInvalido(false)
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
export default ValidadeCNPJ;