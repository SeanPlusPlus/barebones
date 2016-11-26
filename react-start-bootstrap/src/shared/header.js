import React from 'react';
import Scroll from 'react-scroll';
import $ from 'jquery';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      scroll: Scroll.animateScroll,
      message: null,
    };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const url = '/data.json';
    const obj = {
      url,
    };
    const xhr = $.ajax(obj);
    xhr.done(data =>
      this.setState({ message: data.header.message })
    );
  }

  handleClick(e) {
    e.preventDefault();
    this.state.scroll.scrollTo($(e.target.hash).offset().top);
  }

  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <div className="header-content">
                <div className="header-content-inner">
                  <h1>
                    {this.state.message}
                  </h1>
                  <a
                    onClick={e => this.handleClick(e)}
                    href="#download"
                    className="btn btn-outline btn-xl page-scroll"
                  >
                    Start Now for Free!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="device-container">
                <div className="device-mockup iphone6_plus portrait white">
                  <div className="device">
                    <div className="screen">
                      <img src="img/demo-screen-1.jpg" className="img-responsive" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
