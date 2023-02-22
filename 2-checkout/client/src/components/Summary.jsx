import React, { Component } from "react";
import { render } from "react-dom";
import FormThree from './FormOne.jsx';

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      currentPage: 0
    };
  }

  handlePrev() {
    render(<FormThree />, document.getElementById('app'));
    // go to next page
    // set currentPage to currentPage++
    // updating page state will change the page
  }

  handleClick() {
    console.log('hello');
  }

  render() {
    return (
      <div>
        Hello, this is summary form.
      </div>
  )};
}

export default Summary;