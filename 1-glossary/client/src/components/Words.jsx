import React, { Component } from 'react';
import Word from './Word.jsx';

class Words extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  render() {
    return (
      <div>
        {this.props.words.map((word) => {
          return (
            <Word word={word} edit={this.props.edit} delete={this.props.delete}/>
          )
        })}
      </div>
    )
  }
}

export default Words;