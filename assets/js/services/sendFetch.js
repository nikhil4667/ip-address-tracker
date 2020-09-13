import {fetchIP, fetchDomain} from '../api/api.js';
import {header} from '../app.js';
import {initMap,customMarker} from './initMap.js'

const mainCards = document.querySelectorAll('.block-content__content');
let mymap = L.map('mapid').setView([37.4223, -122.085], 13);
initMap(mymap)();

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
    L.marker([res.location.lat, res.location.lng],{icon: customMarker}).addTo(mymap);
 }