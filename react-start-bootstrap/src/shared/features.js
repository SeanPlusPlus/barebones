import React from 'react';
import $ from 'jquery';

class Features extends React.Component {
  constructor() {
    super();
    this.state = {
      features: {
        top: [],
        bottom: [],
      },
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
      this.setState({ features: data.features })
    );
  }

  render() {
    return (
      <section id="features" className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h2>Unlimited Features, Unlimited Fun</h2>
                <p className="text-muted">Check out what you can do with this app theme!</p>
                <hr />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
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
            <div className="col-md-8">
              <div className="container-fluid">

                <div className="row">
                  {this.state.features.top.map(f =>
                    <div key={f.icon} className="col-md-6">
                      <div className="feature-item">
                        <i className={`icon-${f.icon} text-primary`} />
                        <h3>{f.title}</h3>
                        <p className="text-muted">
                          {f.text}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="row">
                  {this.state.features.bottom.map(f =>
                    <div key={f.icon} className="col-md-6">
                      <div className="feature-item">
                        <i className={`icon-${f.icon} text-primary`} />
                        <h3>{f.title}</h3>
                        <p className="text-muted">
                          {f.text}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
