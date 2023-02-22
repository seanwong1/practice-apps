import React, { Component } from "react";
import { render } from "react-dom";

class FormTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Address Info:
        <form>
          <label>
            Address Line 1:
            <input id="addrLineOne" value={this.props.userInput.addrLineOne} onChange={this.props.handleChange} />
          </label>
          <label>
            Address Line 2:
            <input id="addrLineTwo" value={this.props.userInput.addrLineTwo} onChange={this.props.handleChange} />
          </label>
          <label>
            City:
            <input id="addrCity" value={this.props.userInput.addrCity} onChange={this.props.handleChange} />
          </label>
          <label>
            State:
            <input id="addrState" value={this.props.userInput.addrState} onChange={this.props.handleChange} />
          </label>
          <label>
            Zip Code:
            <input id="addrZipCode" value={this.props.userInput.addrZipCode} onChange={this.props.handleChange} />
          </label>
        </form>
        <button className="prev" onClick={this.props.handleClick}>Previous</button>
        <button className="next" onClick={this.props.handleClick}>Next</button>
      </div>
  )};
}

export default FormTwo;