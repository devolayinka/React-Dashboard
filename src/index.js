import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ContextProvider} from'./Context/ContextProvider'
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ContextProvider>
     <App />
  </ContextProvider>,
  document.getElementById('root')
);


