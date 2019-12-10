import React, { Component } from 'react';

export class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  onSubmit = () => {
    const { name } = this.state;

    fetch(`/greeting?name=${name}`)
      .then(response => response.json())
      .then(({ message }) => this.setState({ message, error: null }))
      .catch(error => this.setState({ error }));
  };

  render() {
    const { name, message, error } = this.state;
    return (
      <div style={{ padding: '10px' }}>
        {message && <div style={{ fontSize: '50px' }}>{message}</div>}
        <input
          value={name}
          onChange={event => this.setState({ name: event.target.value })}
          placeholder="Type your name"
        />
        <button type="button" onClick={this.onSubmit}>
          Submit
        </button>
        {error && <pre>{JSON.stringify(error)}</pre>}
      </div>
    );
  }
}
