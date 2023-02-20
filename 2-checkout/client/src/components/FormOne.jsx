import React, { Component } from "react";
import { render } from "react-dom";
import FormTwo from './FormTwo.jsx';

class FormOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      currentPage: 0
    };
  }

  handleClick() {
    render(<FormTwo />, document.getElementById('app'));
    // go to next page
    // set currentPage to currentPage++
    // updating page state will change the page
  }

  render() {
    return (
      <div>
        Hello, this is form
        <button onClick={this.handleClick}>Previous</button>
        <button onClick={this.handleClick}>Next</button>
      </div>
  )};
}

export default FormOne;