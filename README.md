![](./public/screen-top.jpg)

# Calculator of currency savings

&nbsp;

## Table of contents

[⭐ Overview](#⭐-overview)
  - [The challenge](#the-challenge)
  - [Instalation](#installation-💿)
  - [Links](#links)

[💡 My process](#💡-my-process)
  - [Technologies](#technologies)
  - [Solutions provided in the project](#solutions-provided-in-the-project)
  - [Ideas to develop the app](#ideas-to-develop-the-app)
  - [Useful resources](#useful-resources)

[Screenshot](#screenshot)

[🙋‍♂️ Author](#🙋‍♂️-author)

[👏 Special Thanks](#👏-special-thanks)

&nbsp;

## ⭐ Overview

&nbsp;

### **The challenge:**

The challenge was to create calculator that will count the potential profit or loss of owned currencies .

The user is to be able to enter the type, quantity and data of purchase of currency. The purchase price is refileled automatically using API with possibility to modify this price.

The data are display in table with simultaneous comparision purchace prices with current ones using API. The sum of potential profit or loss is counted.

&nbsp;

![](./public/Screen2.jpg)

### **Installation 💿**

The project uses [node](https://nodejs.org/en/), [npm](https://www.npmjs.com/), [CRA](https://create-react-app.dev/) and [whatwg-fetch](https://github.com/github/fetch).

Having them installed, type into the terminal: 
```
npm i
```
Then, you may run webpack typing in the terminal:

```
npm start
```

App is available using the following addresses:

http://localhost:3000

&nbsp;

### **Links:**
- [GitHub](https://github.com/kowackag/calc-price-of-workstation)
- [live](https://kowackag.github.io/calc-price-of-workstation/)

&nbsp;

### **Technologies:**

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)


&nbsp;
  
### **Solutions provided in the project:**
- HTML:
    - The project was built using semantic HTML5 markup.
- CSS:
    - The css styles are created using `styled-components`.
    
- JS:
    - ES2015+ (arrow functions, destructuring, spread operator) was used.
    - Communication with API is based on `fetch()` method.
    - To run the project using browsers that do not support `fetch()` method, package `whatwg-fetch` was used.    
    - Data during working app are saved and store in `localStorage` built into a web browser
    - All fields are validated also using `regex`.
- React:
    - The following hooks were used: `useState`, `useEffect`.
    - Components are split and kept in smaller ones.
- Redux: 
    - The state is managed with Redux, using a separate storage for `localStorage` data and for the `API`. Combine it with `.combineReducers()`.
    - The following hooks were used: `useSelector`, `useDispatch`.

I had opted to use `styled-components` as a solution for managing the CSS.

To make coding with `styled-component` more comfortable, I used a special Extension in Visual Studio Code `vscode-styled-components`.

I used the `createGlobalStyle` function from styled-components and added reset style and some global styles (`Reset.js` and `Global.js`)

```
import {createGlobalStyle} from 'styled-components';
import robotoRegularWoff from "./../fonts/roboto-regular-webfont.woff";
import robotoRegularWoff2 from "./../fonts/roboto-regular-webfont.woff2";
 .....
const GlobalStyle = createGlobalStyle
    ...
    @font-face {
        font-family: "Roboto";
        font-style: regular;
        font-weight: 400;
        src:
        url(${robotoRegularWoff2}) format('woff2'),
        url(${robotoRegularWoff}) format('woff');
    }
```

#### Data storage

 &nbsp;

The data (cuuency price) are loaded from API, communication is based on `fetch()` method. Data during working app are saved and store in [localStorage](http://kursjs.pl/kurs/storage/storage.php) built into a web browser. The state is managed with Redux, using a separate storage for `localStorage` data and for the `API`. Combine it with `.combineReducers()`

```
const reducers = combineReducers({
    exchange: exchangeReducer,
    wallet: walletReducer
})
 ------
const preloadedState = JSON.parse(localStorage.getItem('savings')) || undefined;

const store = createStore(reducers,preloadedState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(()=>{
    const state = store.getState();
    localStorage.setItem('savings', JSON.stringify(state))
})
```

&nbsp;
  
### **Ideas to develop the app:**

One of the idea to develop the app is to add component with graphic representation (chart) showing the level of profit or loss separately for each owned currency.

### **Useful resources:**

- [https://exchangeratesapi.io/](https://exchangeratesapi.io/)
- [localStorage](https://frontstack.pl/czym-jest-local-storage-i-jak-uzywac/) 
- [Google Font](https://fonts.google.com/specimen/Roboto) - `Roboto`
- [Font Avesome](https://fontawesome.com/)

&nbsp;

## 🙋‍♂️ Author

The project was made by Małgorzata Kowacka.
- kowackag@gmail.com
- GitHub - [kowackag](https://github.com/kowackag)
- Linked - [Małgorzata Kowacka](https://www.linkedin.com/in/malgorzata-kowacka)

 **If you have any questions do not hesitate to contact me.**

&nbsp;
