import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillMount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    return (
      <div>
        <h1>Encapsulated Clock</h1>
        <h2>{this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // Need to bind to onClick in the constructor
    // this.handleClick = this.handleClick.bind(this);
  }

  // Arrow function is experiemntal public class method
  handleClick = () => {
  // handleClick() {
    this.setState(
      state => ({
        isToggleOn: !state.isToggleOn
      })
    );
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
)
