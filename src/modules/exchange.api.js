import apiKey from './../../apiKey';

const url =`http://api.exchangeratesapi.io/v1/`

export const handleErrors = (resp) => {
    if (!resp.ok) {
        if (resp.status === 429) {
            return Promise.reject('LINIT EXCEEDED')
        }
        return Promise.reject(resp.status)
    }
    return resp;
}

export const getLatesPriceOfCurr = (curr) => {
    return fetch(`${url}latest?access_key=${apiKey}&symbols=${curr}`)
        .then(resp => handleErrors(resp))
        .then(resp=>resp.json())
}

export const getPrevPriceOfCurr = (curr, date) => {
    return fetch(`${url}${date}?access_key=${apiKey}&symbols=${curr}`)
        .then(resp => handleErrors(resp))
        .then(resp=>resp.json())
}

export const exchangeCurr = (fromCurr, toCurr, amount) => {
    return fetch(`${url}convert?access_key=${apiKey}&from=${fromCurr}&to=${toCurr}&amount=${amount}`)
        .then(resp => handleErrors(resp))
        .then(resp=>resp.json())
}

