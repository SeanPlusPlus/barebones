/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

import React from 'react';

const STATUS = {
  NORMAL: 'normal',
  HOVERED: 'hovered',
};

export default class Link extends React.Component {

  constructor() {
    super();

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);

    this.state = {
      class: STATUS.NORMAL,
    };
  }

  _onMouseEnter() {
    this.setState({ class: STATUS.HOVERED });
  }

  _onMouseLeave() {
    this.setState({ class: STATUS.NORMAL });
  }

  render() {
    return (
      <a
        className={this.state.class}
        href={this.props.page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        {this.props.children}
      </a>
    );
  }
}

Link.propTypes = {
  page: React.PropTypes.string,
  children: React.PropTypes.string,
};
