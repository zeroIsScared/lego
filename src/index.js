import React from 'react';
import ReactDOM from 'react-dom/client';
import Square from './Square.js';
import Triangle from './Triangle.js';
import Hexagon from './Hexagon.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Square color='red' size='100'  place={[50, 200]}/>
  <Triangle color='orange' size='300'  place={[150, 50]}/>
  <Hexagon color='pink' size='300'  place={[50, 350]}  ></Hexagon>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

