import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import FormOne from './FormOne.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      currentPage: 0
    };
  }

  handleClick() {
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    render(<FormOne />, document.getElementById('app'));
    // go to next page
    // set currentPage to currentPage++
    // updating page state will change the page
  }

  render() {
    return (
      <div id='app'>
        <button onClick={this.handleClick}>Checkout</button>
      </div>
  )};
}

export default App;