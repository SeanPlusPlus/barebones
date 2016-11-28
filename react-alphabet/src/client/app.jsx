import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Panel } from 'react-bootstrap';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      input: {
        start: '',
        end: '',
      },
      alphabet: {
        start: {
          character: '',
          integer: null,
        },
        end: {
          character: '',
          integer: null,
        },
        characters: [],
      },
    };
  }
  componentWillMount() {
    this.displayAlphabet(null, null);
  }
  displayAlphabet(startInteger, endInteger) {
    let first = startInteger;
    if (!first) {
      first = 97;
    }
    let last = endInteger;
    if (!last) {
      last = 122;
    }
    const characters = [];
    const range = (last - first) + 1;
    if (range < 0) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
      [...Array(range).keys()].map(i =>
        characters.push(String.fromCharCode(i + first))
      );
    }
    const alphabet = {
      characters,
      start: {
        integer: first,
        character: String.fromCharCode(first),
      },
      end: {
        integer: last,
        character: String.fromCharCode(last),
      },
    };
    this.setState({ alphabet });
  }
  updateStartValue(e) {
    const input = {
      start: e.target.value,
      end: this.state.input.end,
    };
    this.setState({ input });
    const startInteger = e.target.value.charCodeAt(0);
    this.displayAlphabet(startInteger, this.state.alphabet.end.integer);
  }
  updateEndValue(e) {
    const input = {
      start: this.state.input.start,
      end: e.target.value,
    };
    this.setState({ input });
    const endInteger = e.target.value.charCodeAt(0);
    this.displayAlphabet(this.state.alphabet.start.integer, endInteger);
  }
  render() {
    const title = 'Alphabet';
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Panel header={title}>
              <div className="row">
                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="start"
                    value={this.state.input.start}
                    onChange={e => this.updateStartValue(e)}
                  />
                  <input
                    className="form-control"
                    placeholder="end"
                    value={this.state.input.end}
                    onChange={e => this.updateEndValue(e)}
                  />
                  {this.state.error &&
                    <div className="alert alert-danger">error</div>
                  }
                  {!this.state.error &&
                    this.state.alphabet.characters.map(c =>
                      <li key={c}>{c}</li>
                    )
                  }
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-xs-4">
                      <legend>start</legend>
                      <code>character: {this.state.alphabet.start.character}</code>
                      <br />
                      <code>integer: {this.state.alphabet.start.integer}</code>
                    </div>
                    <div className="col-xs-4">
                      <legend>end</legend>
                      <code>character: {this.state.alphabet.end.character}</code>
                      <br />
                      <code>integer: {this.state.alphabet.end.integer}</code>
                    </div>
                    <div className="col-xs-4">
                      <legend>input</legend>
                      <code>start: {this.state.input.start}</code>
                      <br />
                      <code>end: {this.state.input.end}</code>
                    </div>
                  </div>
                </div>
              </div>
            </Panel>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.app'));
