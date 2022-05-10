import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
//setup redux store
const store=configureStore({
  reducer:{}
})

ReactDOM.render(
  <React.StrictMode>
    <Provider>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

