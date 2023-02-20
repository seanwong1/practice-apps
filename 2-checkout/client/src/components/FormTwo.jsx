import React, { Component } from "react";
import { render } from "react-dom";
import FormThree from './FormThree.jsx';

class FormTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      currentPage: 0
    };
  }

  handleClick() {
    render(<FormThree />, document.getElementById('app'));
    // go to next page
    // set currentPage to currentPage++
    // updating page state will change the page
  }

  render() {
    return (
      <div>
        Hello, this is form 2
        <button onClick={this.handleClick}>Previous</button>
        <button onClick={this.handleClick}>Next</button>
      </div>
  )};
}

export default FormTwo;