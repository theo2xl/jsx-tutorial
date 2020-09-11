import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

function App() {
  return (
    <div>
      <Welcome name='Ted' />
      <Welcome name='Jenny' />
      <Welcome name='Addie' />
      <Welcome name='Mila' />
    </div>
  );
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>Clock class time: {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick() {
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  )
}

setInterval(tick, 1000);
