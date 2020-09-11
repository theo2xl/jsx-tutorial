import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function printFirstName(user) {
  return user.firstName;
}

const user = {
  firstName: 'Addie',
  lastName: 'Coleman'
}

const element = <h1>Hi, {printFirstName(user)}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
)
