
export const fetchIP = (ip) => {
    return fetch(`https://geo.ipify.org/api/v1?apiKey=at_cxs8Ky5SR3Cm1QsVJaJ9RIC3faKk4&ipAddress=${ip}`)
    .then(res => res.json())
}

export const fetchDomain = (domain) => {
    return fetch(`https://geo.ipify.org/api/v1?apiKey=at_cxs8Ky5SR3Cm1QsVJaJ9RIC3faKk4&domain=${domain}`)
        .then(res => res.json())
}

//`?apiKey=at_cxs8Ky5SR3Cm1QsVJaJ9RIC3faKk4&ipAddress=${ip}`,