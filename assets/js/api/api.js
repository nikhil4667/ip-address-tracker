
export const fetchIP = (ip) => {
    return fetch(`https://geo.ipify.org/api/v1?apiKey=at_cxs8Ky5SR3Cm1QsVJaJ9RIC3faKk4&ipAddress=${ip}`)
    .then(res => res.json())
}

export const fetchDomain = (domain) => {
    return fetch(`https://geo.ipify.org/api/v1?apiKey=at_cxs8Ky5SR3Cm1QsVJaJ9RIC3faKk4&domain=${domain}`)
        .then(res => res.json())
}

export const fetchMap = (map) => {
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaGlhZ3VlZGVzIiwiYSI6ImNrZjB5b2EyNDF1OXkycmw5NmtpeW40N2IifQ.C9OJBjZ-tiRe2BfnISOppw'
}).addTo(map);
}

//`?apiKey=at_cxs8Ky5SR3Cm1QsVJaJ9RIC3faKk4&ipAddress=${ip}`,