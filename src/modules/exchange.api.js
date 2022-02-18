// import apiKey from './../../apiKey';
const apiKey = '4570ac1e4dc6c35eb46391296b03ad64';
const url ='http://api.exchangeratesapi.io/v1/';

const handleErrors = (resp) => {
    console.log('handleError');
    if (!resp.ok) {
        console.log(resp.status)
        if (resp.status === 429) {
            return Promise.reject('LINIT EXCEEDED')
        }
        return Promise.reject(resp.status)
    }
    return resp;
}

export const getLatesPriceOfCurrAPI = (curr)=> {
    return fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=4570ac1e4dc6c35eb46391296b03ad64&symbols=USD`)
    .then(resp=>handleErrors(resp))
    .then(resp=>resp.json())
}

export const getPrevPriceOfCurrAPI = (curr, date) => {
    return fetch(`${url}${date}?access_key=${apiKey}&symbols=${curr}`)
        .then(resp => console.log(resp) )
        .then(resp=>resp.json())
}

export const exchangeCurrAPI = (fromCurr, toCurr, amount) => {
    return fetch(`${url}convert?access_key=${apiKey}&from=${fromCurr}&to=${toCurr}&amount=${amount}`)
        .then(resp => handleErrors(resp))
        .then(resp=>resp.json())
}

