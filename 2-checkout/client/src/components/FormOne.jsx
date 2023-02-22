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

  handleNext(userInput) {
    // render(<FormTwo userInput={userInput}/>, document.getElementById('app'));
    // go to next page
    // set currentPage to currentPage++
    // updating page state will change the page
  }

  render() {
    //console.log(this.props)
    var userInput = this.props.userInput;
    return (
      <div>
        Hello, this is form 1
        <form>
          <label>
            First Name:
            <input id="firstName" value={this.props.userInput.firstName} onChange={this.props.handleChange} />
          </label>
          <label>
            Last Name:
            <input id="lastName" value={this.props.userInput.lastName} onChange={this.handleInputChange} />
          </label>
          <label>
            Email:
            <input id="email" value={this.props.userInput.email} onChange={this.props.handleChange} />
          </label>
          <label>
            Password:
            <input id="password" value={this.props.userInput.password} onChange={this.props.handleChange} />
          </label>
        </form>
      </div>
  )};
}

export default FormOne;