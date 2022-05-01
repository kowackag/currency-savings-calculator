export const errorsDB = [
   { code: 404, desc: 'The requested resource does not exist.'},
   { code: 101, desc: 'No API Key was specified or an invalid API Key was specified.'},
   { code: 103, desc: 'The requested API endpoint does not exist.'},
   { code: 104, desc: 'The maximum allowed API amount of monthly API requests has been reached.'},
   { code: 105, desc: 'The current subscription plan does not support this API endpoint.'},
   { code: 106, desc: 'The current request did not return any results.'},
   { code: 102, desc: 'The account this API request is coming from is inactive.'},
   { code: 201, desc: 'An invalid base currency has been entered.'},
   { code: 202, desc: 'One or more invalid symbols have been specified.'},
   { code: 301, desc: 'No date has been specified.'},
   { code: 302, desc: 'An invalid date has been specified.'},
   { code: 403, desc: 'No or an invalid amount has been specified.'},
];
   

export const currencyDB = [
   {code: 'AUD', name: 'Dolar Australijski'},
   {code: 'BGN', name: 'Lew'},
   {code: 'CAD', name: 'Dolar kanadyjski'},
   {code: 'CHF', name: 'Frank szwajcarski'},
   {code: 'CNY', name: 'Renminbi'},
   {code: 'CZK', name: 'Korona Czeska'},
   {code: 'DKK', name: 'Korona Duńska'},
   {code: 'EUR', name: 'Euro'},
   {code: 'GBP', name: 'Brytyjski funt szterling'},
   {code: 'HRK', name: 'Kuna'},
   {code: 'HUF', name: 'Forint'},
   {code: 'JPY', name: 'Jen'},
   {code: 'NOK', name: 'Korona norweska'},
   {code: 'PLN', name: 'Złoty Polski'},
   {code: 'RUB', name: 'Rubel rosyjski'},
   {code: 'SEK', name: 'Korona szwedzka'},
   {code: 'UAH', name: 'Hrywna'},
   {code: 'USD', name: 'Dolar amerykański'}
];

export const columnsNames = ['Waluta', 'Ilość', 'Data Zakupu', 'Cena Zakupu', 'Obecny kurs', 'Obecna wartość', 'Zysk/ Strata'];
