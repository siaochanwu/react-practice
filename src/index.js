import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Parent from './Parent'

const DATA=[
  {id: "todo-0", name: 'eat', completed: false},
  {id: "todo-1", name: 'gym', completed: false},
  {id: "todo-2", name: 'learning', completed: false},
]

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
      ,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
