import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Panel, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

function toTitleCase(str) { // displays each input title nicely inside <label> element
  if (!str) {
    return '';
  }
  const strWhiteSpace = str.split('_').join(' ');
  return strWhiteSpace.replace(/\w\S*/g, (txt =>
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  ));
}

class App extends React.Component {
  constructor() {
    super();
    const formFields = [
      {
        name: 'first_name',
        required: true,
        type: 'text',
      },
      {
        name: 'last_name',
        required: true,
        type: 'text',
      },
    ];
    this.state = {
      formFields,
      data: {},
    };
  }

  componentWillMount() {
    this.fetch();
  }

  fetch() {
    const data = {};
    for (const a of this.state.formFields) {
      data[a.name] = '';
    }
    this.setState({
      data,
    });
  }

  handleChangeInput(e) { // general handler for inputs other than date
    const data = this.state.data;
    data[e.target.name] = e.target.value;
    this.setState({
      data,
    });
  }

  render() {
    const title = 'React Form Example';
    const handleChangeInput = this.handleChangeInput.bind(this);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-header">{title}</h1>
            <div className="row">
              <div className="col-sm-6">
                <Panel header={'New Request'}>
                  <form>
                    {this.state.formFields.map(a =>
                      <div key={a.name}>
                        <ControlLabel>
                          {toTitleCase(a.name)}
                        </ControlLabel>
                        <FormGroup>
                          <FormControl
                            name={a.name}
                            value={this.state.data[a.name]}
                            onChange={handleChangeInput}
                          />
                        </FormGroup>
                      </div>
                    )}
                  </form>
                </Panel>
              </div>
              <div className="col-sm-6">
                <Panel header={'Data'}>
                  <pre>{JSON.stringify(this.state.data, null, 2) }</pre>
                </Panel>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.app'));
