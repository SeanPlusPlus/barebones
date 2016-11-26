import React from 'react';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'SeanPlusPlus',
      menu: ['download', 'features', 'contact'],
    };
  }

  render() {
    return (
      <footer>
        <div className="container">
          <p>&copy; 2016 Start Bootstrap. All Rights Reserved.</p>
          <ul className="list-inline">
            <li>
              <a href="/foo">Privacy</a>
            </li>
            <li>
              <a href="/foo">Terms</a>
            </li>
            <li>
              <a href="/foo">FAQ</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
