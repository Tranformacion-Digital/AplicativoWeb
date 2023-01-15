import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import GraficaProceso from './pages/graficaProceso';
//import {Home} from './pages/home';
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';

import './styles/global.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <AppRouter/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
