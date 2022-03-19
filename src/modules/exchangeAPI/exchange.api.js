import apiKey from './../../../apiKey';

const url ='//api.exchangeratesapi.io/v1/';

const handleErrors = (resp) => {
    if (!resp.ok) {
        if (resp.status === 429) {
            return Promise.reject('LINIT EXCEEDED')
        }
        return Promise.reject(resp.status)
    }
    return resp;
}

export const getLatesPriceOfCurrAPI = (curr)=> {
    return fetch(`${url}latest?access_key=${apiKey}&symbols=${curr},PLN`)
    .then(resp => handleErrors(resp))
    .then(resp=>resp.json())
}

export const getPrevPriceOfCurrAPI = (curr, date) => {
    
    return fetch(`${url}${date}?access_key=${apiKey}&symbols=${curr},PLN`)
        .then(resp => handleErrors(resp) )
        .then(resp=>resp.json())
}

export const exchangeCurrAPI = (fromCurr, toCurr, amount) => {
    return fetch(`${url}convert?access_key=${apiKey}&from=${fromCurr}&to=${toCurr}&amount=${amount}`)
        .then(resp => handleErrors(resp))
        .then(resp=>resp.json())
}