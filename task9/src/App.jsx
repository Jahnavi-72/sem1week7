import React, { Component } from 'react';

class ErrorMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false, 
    };
  }
  toggleError = () => {
    this.setState(prevState => ({
      error: !prevState.error,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleError}>
          {this.state.error ? 'Hide Error' : 'Show Error'}
        </button>
        {this.state.error && (
          <div style={{ color: 'red', marginTop: '10px' }}>
            An error has occurred. Please try again.
          </div>
        )}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Error Message Example</h1>
        <ErrorMessage />
      </div>
    );
  }
}

export default App;
