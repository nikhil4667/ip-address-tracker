import { createMessageError } from './services/formValidator.js';
import { sendFetch } from './services/sendFetch.js';

const input = document.querySelector('.form__input');
const button = document.querySelector('.form__button');
export const header = document.querySelector('.header');

button.addEventListener('click', event => {
    event.preventDefault();
    input.validity.valid? sendFetch(input.value) : createMessageError(input.validity);
    
})

