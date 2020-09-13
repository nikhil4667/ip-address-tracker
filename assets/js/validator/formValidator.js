import {fetchIP, fetchDomain} from '../api/api.js';

const errorType = ["valueMissing", "patternMismatch"];
const header = document.querySelector('.header');
const mainCards = document.querySelectorAll('.block-content__content');

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

export const sendFetch = (inputValue) => {
    if(header.lastChild == document.querySelector('.form__error')) document.querySelector('.form__error').remove();
    const domainPattern= /[www.]?.+\.com(\.[a-z]+)?/g;
    const IPPattern = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/g

    //console.log(typeof(inputValue));
    //console.log(domainPattern.test(inputValue), IPPattern.test(inputValue))

    if(domainPattern.test(inputValue)){
        fetchDomain(inputValue)
        .then(res => {
            _populateMainCard(res);
        });
    }

    if(IPPattern.test(inputValue)){
        fetchIP(inputValue)
        .then(res => {
            _populateMainCard(res);
        });
    }
}

 const _populateMainCard = (res) => {
     const populate = [res.ip,
                         `${res.location.city}, ${res.location.country}, ${res.location.region}`,
                         res.location.timezone,
                        res.isp ];

     mainCards.forEach((mainCard,index) =>{
        mainCard.textContent='';
        mainCard.textContent=populate[index];
     })
 }
