import React, { Component } from 'react';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const id = target.id;

    this.setState({
      [id]: value
    });
  };

  handleSubmit(event) {
    this.props.add(this.state.word, this.state.definition);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Add new Word</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label for="word">Word:</label>
            <input type="text" id="word" value={this.state.word} onChange={this.handleChange}></input>
          </div>
          <div>
            <label for="definition">Definition:</label>
            <input type="text" id="definition" value={this.state.definition} onChange={this.handleChange}></input>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Add;