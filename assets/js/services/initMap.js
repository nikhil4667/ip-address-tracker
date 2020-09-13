import {fetchMap} from '../api/api.js'

export const customMarker = L.icon({
    iconUrl: '/assets/images/icon-location.svg',
    iconSize:     [27, 40]
});

export const initMap = (mymap) => () => {
L.marker([37.4223, -122.085],{icon: customMarker}).addTo(mymap);
fetchMap(mymap);
};