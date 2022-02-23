// ./src/app.js
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './../src/components/App';
// import store from './modules/index'
import {ThemeProvider} from 'styled-components';
import themeSettings from './styles/theme';
import GlobalStyle from './styles/Global';
import ResetStyle from './styles/Reset';
import store from './store'


ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={themeSettings}> 
      <ResetStyle/>
      <GlobalStyle/>
      <App />
    </ThemeProvider>  
  </Provider>, document.querySelector('#root'));