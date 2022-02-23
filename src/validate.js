const validateData = ({curr, price, date, amount}) => {
    let errors = {}
   
    if (Number(amount) <0) {
        const copyErrors = {amountErr:'Ilość nie może byc mniejsza od 0'};
        errors = { ...errors, ...copyErrors};
    }

    if (amount == '') {
        const copyErrors = {amountErr:'Podaj ilość zakupionej waluty'};
        errors = { ...errors, ...copyErrors};
    }

    if (curr == '')  {
        const copyErrors = {currErr:'Podaj walutę'};
        errors = { ...errors, ...copyErrors};
    }

    if (Number(price) <0) {
        const copyErrors = {priceErr:'Cena nie może byc mniejsza od 0'};
        errors = { ...errors, ...copyErrors};
    }

    if (isNaN(price)) {
        const copyErrors = {priceErr: 'Podaj cene zakupu'};
        errors = { ...errors, ...copyErrors};
    }

    const regDate = /(1999|20[0-9]{2})-(0[1-9]|1[0-2])-(0[0-9]|[12][0-9]|3[01])/;
    if (!regDate.test(date)) {
        const copyErrors = {dateErr: 'Podaj datę zakupu po 01.01.1999'};
        errors = {...errors, ...copyErrors};
    }

    return errors;
}

export default validateData;