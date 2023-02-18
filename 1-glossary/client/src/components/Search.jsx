import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    }

    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const id = target.id;

    this.setState({
      [id]: value
    });

    this.props.populate(value);
  };

  render() {
    return (
      <div>
        <h2>Search</h2>
        <form>
          <div>
            <input type="text" id="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}></input>
          </div>
        </form>
      </div>
    )
  }
}

export default Search;