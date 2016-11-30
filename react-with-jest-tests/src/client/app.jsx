import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from '../shared/HelloWorld';

function App() {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}


ReactDOM.render(<App />, document.querySelector('.app'));
