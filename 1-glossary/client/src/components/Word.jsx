import React, { Component } from 'react';

class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  render() {
    return (
      <div>
        <div>{this.props.word.word}</div>
        <div>{this.props.word.definition}</div>
        <button onClick={() => {this.props.edit(this.props.word.word, this.props.word.definition)}}>Edit</button>
        <button onClick={() => {this.props.delete(this.props.word.word, this.props.word.definition)}}>Delete</button>
      </div>
    )
  }
}

export default Word;