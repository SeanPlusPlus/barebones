import React from 'react';
import Scroll from 'react-scroll';
import $ from 'jquery';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'SeanPlusPlus',
      menu: ['download', 'features', 'contact'],
      scroll: Scroll.animateScroll,
    };
  }

  componentDidMount() {
    const navbar = $('.navbar');
    function scrollNav() {
      if ($(window).scrollTop() <= 40) {
        navbar.addClass('affix-top').removeClass('affix');
      } else {
        navbar.addClass('affix').removeClass('affix-top');
      }
    }
    $(window).scroll(scrollNav);
  }

  handleClick(e) {
    e.preventDefault();
    this.state.scroll.scrollTo($(e.target.hash).offset().top);
  }

  render() {
    return (
      <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars" />
            </button>
            <a
              onClick={e => this.handleClick(e)}
              className="navbar-brand page-scroll"
              href="#page-top"
            >
              {this.state.title}
            </a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              {this.state.menu.map(m =>
                <li key={m}>
                  <a onClick={e => this.handleClick(e)} href={`#${m}`}>
                    {m}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
