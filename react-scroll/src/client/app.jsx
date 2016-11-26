import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello world',
    };
  }
  render() {
    return (
      <div>
        {this.state.message}
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.app'));
