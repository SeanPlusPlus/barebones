import React from 'react';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'SeanPlusPlus',
      menu: ['download', 'features', 'contact'],
    };
  }

  render() {
    return (
      <section id="contact" className="contact bg-primary">
        <div className="container">
          <h2>We <i className="fa fa-heart" /> new friends!</h2>
          <ul className="list-inline list-social">
            <li className="social-twitter">
              <a href="/foo"><i className="fa fa-twitter" /></a>
            </li>
            <li className="social-facebook">
              <a href="/foo"><i className="fa fa-facebook" /></a>
            </li>
            <li className="social-google-plus">
              <a href="/foo"><i className="fa fa-google-plus" /></a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Contact;
