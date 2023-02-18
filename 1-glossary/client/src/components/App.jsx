import React, { Component, useEffect } from 'react';
import axios from 'axios';
import Words from './Words.jsx';
import Add from './Add.jsx';
import Search from './Search.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    };
  }

  edit(word) {
    new Promise(editWord)
      .then((newDefinition) => axios.put('/words', {
        word: word,
        definition: newDefinition
      })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        }));
    function editWord(resolve, reject) {
      let newDefinition = prompt("Editing " + word + " definition");
      resolve(newDefinition);
    }
  }

  delete(word, definition) {
    console.log(word);
    axios.delete('/words', {
      data: {
        word: word,
        definition: definition
      }
    })
      .then((response) => {
        console.log(response);
    })
      .catch((err) => {
        console.log(err);
    })
  }

  add(word, definition) {
    axios.post('/words', {
      word: word,
      definition: definition
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  populate(searchTerm) {
    axios.get('/words', {
      params: {
        search: searchTerm
      }
    })
      .then((response) => {
        this.setState({
          words: response.data
        });
      })
  };

  componentDidMount() {
    this.populate('');
  }

  render() {
    return(
      <div>
        <h1>Glossary</h1>
        <Add add={this.add} word={this.state.word} definition={this.state.definition} />
        <Search populate={this.populate.bind(this)} />
        <button onClick={this.populate.bind(this)}>Test</button>
        <Words words={this.state.words} edit={this.edit} delete={this.delete} />
      </div>
    )
  }
}

export default App;