import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//React
//The methods imported from 'react' don’t deal with the DOM at all. 
//They don’t engage directly with anything that isn’t part of React.
//Methods imported from 'react' are only for pure React purposes, 
//such as creating components or writing JSX elements.

//ReactDOM
//The methods imported from 'react-dom' are meant for interacting with the DOM. 
//You are already familiar with one of them: ReactDOM.render().