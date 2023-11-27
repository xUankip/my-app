import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';
import Popper from 'popper.js';
// import App2 from './App2';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App3 from './App3';
import ClickMe from './App4.1';
import MyButton from '../src/SS4/MyButton'
import MyButton1 from '../src/SS4/MyButton1'
import MyButton2 from '../src/SS4/MyButton2'
import MyButton4 from '../src/SS4/MyButton4'
import './XO game/xo.css'
import Game from './XO game/XO';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ClickMe /> */}
    {/* <MyButton />
    <MyButton1 />
    <MyButton2 />
    <MyButton4 /> */}
    <Game />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
