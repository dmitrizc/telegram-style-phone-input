import React, { Component } from 'react';

import PhoneInput from './PhoneInput';

class App extends Component {
  state = {
    number: '+13236288307',
    country: 'US',
  };

  handleChange = (number, country) => {
    this.setState({
      number,
      country,
    });
  };

  render () {
    return (
      <div className="App">
        <PhoneInput initialCountry={this.state.country} initialNumber={this.state.number} onChange={this.handleChange}/>

        <h1>{this.state.country} {this.state.number}</h1>
      </div>
    );
  }
}

export default App;
