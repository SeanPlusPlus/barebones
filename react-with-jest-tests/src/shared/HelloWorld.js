import React from 'react';

class HelloWorld extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello world!',
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

export default HelloWorld;
