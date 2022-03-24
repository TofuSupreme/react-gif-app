import '../assets/stylesheets/application.scss';

import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line react/prefer-stateless-function
class Greeting extends React.Component {
  render() {
    const { name, age } = this.props;
    const message = `Hello I'm ${name} and I'm ${age} years old`;
    return <h1>{message}</h1>;
  }
}
const root = document.getElementById('root');

ReactDOM.render(<Greeting name="Regulus" age="0" />, root);
