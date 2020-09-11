import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function NumberList(props) {
  const numbers = props.numbers;

  return (
    <ul>
      {numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
      )}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
)
