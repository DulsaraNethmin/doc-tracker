import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configureStore} from '@reduxjs/toolkit';
//setup redux store
const store=configureStore({
  reducer:{}
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

