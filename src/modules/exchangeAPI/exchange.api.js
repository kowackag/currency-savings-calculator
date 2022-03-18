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
    return fetch(`${url}latest?access_key=4570ac1e4dc6c35eb46391296b03ad64&symbols=${curr},PLN`)
    .then(resp => handleErrors(resp))
    .then(resp=>resp.json())
}

export const getPrevPriceOfCurrAPI = (curr, date) => {
    
    return fetch(`${url}${date}?access_key=4570ac1e4dc6c35eb46391296b03ad64&symbols=${curr},PLN`)
        .then(resp => handleErrors(resp) )
        .then(resp=>resp.json())
}

export const exchangeCurrAPI = (fromCurr, toCurr, amount) => {
    return fetch(`${url}convert?access_key=apiKey4570ac1e4dc6c35eb46391296b03ad64&from=${fromCurr}&to=${toCurr}&amount=${amount}`)
        .then(resp => handleErrors(resp))
        .then(resp=>resp.json())
}