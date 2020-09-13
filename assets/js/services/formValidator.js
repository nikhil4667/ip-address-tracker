import {header} from '../app.js';

const errorType = ["valueMissing", "patternMismatch"];
const mensagensErro = {
    valueMissing: "Please Write Something",
    patternMismatch: "The pattern must be d[ddd].d[ddd].d[ddd].d[ddd] or www.site.com/site.com/site.com.br"
}

const mensagemErro = validador => {
    let mensagem= "";
    errorType.forEach(erro =>{
        if(validador[erro]){
            mensagem = mensagensErro[erro]
        }
    })
return mensagem;
}

export const createMessageError = (validador) => {
    const p = document.createElement('p');
    p.classList.add('form__error');
    if(header.lastChild == document.querySelector('.form__error')) document.querySelector('.form__error').remove();
    p.textContent = mensagemErro(validador);
    header.appendChild(p);
}

