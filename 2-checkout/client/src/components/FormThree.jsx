import React, { Component } from "react";
import { render } from "react-dom";

class FormThree extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Credit Card Info:
        <form>
          <label>
            Number:
            <input id="cardNum" value={this.props.userInput.cardNum} onChange={this.props.handleChange} />
          </label>
          <label>
            Expiration Date:
            <input id="cardExpDate" value={this.props.userInput.cardExpDate} onChange={this.props.handleChange} />
          </label>
          <label>
            CVV:
            <input id="cardCVV" value={this.props.userInput.cardCVV} onChange={this.props.handleChange} />
          </label>
          <label>
            Billing Zip Code:
            <input id="billingZipCode" value={this.props.userInput.billingZipCode} onChange={this.props.handleChange} />
          </label>
        </form>
        <button className="prev" onClick={this.props.handleClick}>Previous</button>
        <button className="next" onClick={this.props.handleClick}>Next</button>
      </div>
  )};
}

export default FormThree;