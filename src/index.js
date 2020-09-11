import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ViewWelcome(props) {
  return <h1>Hello, {props.name}</h1>
}

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

const viewElement = <ViewWelcome name="Addie" />;
const element = <Welcome name="Mila" />;

ReactDOM.render(
  viewElement,
  // element,
  document.getElementById('root')
)
