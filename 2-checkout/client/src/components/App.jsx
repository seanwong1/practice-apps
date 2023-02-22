import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import FormOne from './FormOne.jsx';
import FormTwo from './FormTwo.jsx';
import FormThree from './FormThree.jsx';
import Summary from './Summary.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      userInput: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const id = target.id;

    this.setState(prevState => ({
      userInput: {...prevState.userInput, [id]: value}
    }));
  }

  handleClick(event) {
    if (event.target.className === 'next') {
      this.setState((state) => ({currentPage: state.currentPage + 1}));
    } else if (event.target.className === 'prev') {
      this.setState((state) => ({currentPage: state.currentPage - 1}));
    }
    console.log(this.state.currentPage)
  }

  render() {
    var page;
    if (this.state.currentPage === 1) {
      page = <FormOne userInput={this.state} handleChange={this.handleChange} handleClick={this.handleClick} />;
    } else if (this.state.currentPage === 2) {
      page = <FormTwo userInput={this.state} handleChange={this.handleChange} handleClick={this.handleClick} />;
    } else if (this.state.currentPage === 3) {
      page = <FormThree userInput={this.state} handleChange={this.handleChange} handleClick={this.handleClick} />;
    } else if (this.state.currentPage === 4) {
      page = <Summary userInput={this.state} handleChange={this.handleChange} handleClick={this.handleClick} />;
    } else {
      page = <button className="next" onClick={this.handleClick}>Checkout</button>;
    }

    return (
      <div id='app'>
        {page}
        <button className="prev" onClick={this.handleClick}>Previous</button>
        <button className="next" onClick={this.handleClick}>Next</button>
      </div>
  )};
}

export default App;