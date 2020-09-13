import {fetchIP, fetchDomain,fetchMap} from '../api/api.js';
import {header} from '../app.js';

const mainCards = document.querySelectorAll('.block-content__content');

let mymap = L.map('mapid').setView([51.505, -0.09], 13);
let marker = L.marker([51.5, -0.09]).addTo(mymap);
fetchMap(mymap);

export const sendFetch = (inputValue) => {
    if(header.lastChild == document.querySelector('.form__error')) document.querySelector('.form__error').remove();
    const domainPattern= /[www.]?.+\.com(\.[a-z]+)?/g;
    const IPPattern = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/g;

    if(domainPattern.test(inputValue)){
        fetchDomain(inputValue)
        .then(res => {
            _populateMainCard(res);
            _moveMap(res);
        });
    }

    if(IPPattern.test(inputValue)){
        fetchIP(inputValue)
        .then(res => {
            _populateMainCard(res);
            _moveMap(res);
        });
    }
}

 const _populateMainCard = (res) => {
     const populate = [ res.ip,
                        `${res.location.city}, ${res.location.country}, ${res.location.region}`,
                        res.location.timezone,
                        res.isp ];

     mainCards.forEach((mainCard,index) =>{
        mainCard.textContent='';
        mainCard.textContent=populate[index];
     })
 }

 const _moveMap = (res) => {
    mymap.flyTo([res.location.lat, res.location.lng], 13);
    L.marker([res.location.lat, res.location.lng]).addTo(mymap);
 }