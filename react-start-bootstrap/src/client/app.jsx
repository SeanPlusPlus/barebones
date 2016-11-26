import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../shared/nav';
import Header from '../shared/header';
import Download from '../shared/download';
import Features from '../shared/features';
import Cta from '../shared/cta';
import Contact from '../shared/contact';
import Footer from '../shared/footer';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Download />
      <Features />
      <Cta />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.querySelector('.app'));
