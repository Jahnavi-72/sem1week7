import React, { Component } from 'react';

class StatusMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'processing', // Initial status set to 'processing'
    };
  }

 
  changeStatus = (newStatus) => {
    this.setState({ status: newStatus });
  };

  render() {
    const { status } = this.state;
    let message;
    switch (status) {
      case 'processing':
        message = <div>Processing...</div>;
        break;
      case 'success':
        message = <div style={{ color: 'green' }}>Success! Operation completed successfully.</div>;
        break;
      case 'error':
        message = <div style={{ color: 'red' }}>Error! Something went wrong.</div>;
        break;
      default:
        message = <div>Unknown status</div>;
    }

    return (
      <div>
        <h1>Status Message Example</h1>
        {message}
        <div>
          <button onClick={() => this.changeStatus('processing')}>Set Processing</button>
          <button onClick={() => this.changeStatus('success')}>Set Success</button>
          <button onClick={() => this.changeStatus('error')}>Set Error</button>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <StatusMessage />
      </div>
    );
  }
}

export default App;
