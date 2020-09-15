import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './HelloWorld';

ReactDOM.render(
  <React.StrictMode>
    <HelloWorld name='Ted' />
  </React.StrictMode>,
  document.getElementById('root')
)
