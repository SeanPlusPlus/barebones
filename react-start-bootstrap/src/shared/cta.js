import React from 'react';

class Cta extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'SeanPlusPlus',
      menu: ['download', 'features', 'contact'],
    };
  }

  render() {
    return (
      <section className="cta">
        <div className="cta-content">
          <div className="container">
            <h2>Stop waiting.<br />Start building.</h2>
            <a href="#contact" className="btn btn-outline btn-xl page-scroll">
              Get Started
            </a>
          </div>
        </div>
        <div className="overlay">&nbsp;</div>
      </section>
    );
  }
}

export default Cta;
