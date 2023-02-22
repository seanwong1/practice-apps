import React, { Component } from "react";
import { render } from "react-dom";
import FormThree from './FormThree.jsx';
import FormOne from './FormOne.jsx';

class FormTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      currentPage: 0
    };
  }

  render() {
    console.log(this.props.userInput);
    return (
      <div>
        Hello, this is form 2
      </div>
  )};
}

export default FormTwo;