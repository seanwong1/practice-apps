import React, { Component } from "react";
import { render } from "react-dom";

class FormOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Account Info:
        <form>
          <label>
            First Name:
            <input id="firstName" value={this.props.userInput.firstName} onChange={this.props.handleChange} />
          </label>
          <label>
            Last Name:
            <input id="lastName" value={this.props.userInput.lastName} onChange={this.props.handleChange} />
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
        <button className="next" onClick={this.props.handleClick}>Next</button>
      </div>
  )};
}

export default FormOne;