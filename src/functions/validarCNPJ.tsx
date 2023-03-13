function verificarDigitos(tamanho:number, numeros:string, pos:number){
    let soma = 0;
    for(let i = tamanho; i >= 1; i--){
        soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
        if(pos < 2) pos = 9;
    }
    return soma;
}

function validacaoCNPJ(cnpj:string){
    //Primeiro Digito
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let pos = tamanho - 7;
    let soma = verificarDigitos(tamanho, numeros, pos);
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if(String(resultado) !== digitos.charAt(0)) return false;
    //Segundo Digito
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    soma = verificarDigitos(tamanho, numeros, pos);
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if(String(resultado) !== digitos.charAt(1)) return false;
    //Se os digitos forem iguais
    return true;
}

export default validacaoCNPJ;