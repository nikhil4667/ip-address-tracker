import { createMessageError, sendFetch } from './validator/formValidator.js';

const input = document.querySelector('.form__input');
const button = document.querySelector('.form__button');

button.addEventListener('click', event => {
    event.preventDefault();
    input.validity.valid? sendFetch(input.value) : createMessageError(input.validity);
    
})

