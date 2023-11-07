import React, { Component } from 'react';
import WordsForm from 'components/WordsForm/WordsForm';
import WordsList from 'components/WordsList/WordsList';
import { WordsFilter } from './WordsFilter/WordsFilter';
export class App extends Component {
  state = {
    words: [],
    filter: '',
  };
  handleAddWord = newWord => {
    this.setState(prevState => {
      return {
        words: [...prevState.words, newWord],
      };
    });
  };

  // increaseNumber = () => {
  //   this.setState(prevState => ({ number: prevState.number + 1 }));
  // };

  handleDelete = wordId => {
    this.setState(prevState => ({
      words: prevState.words.filter(word => word.id !== wordId),
    }));
  };

  handleFilterChange = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  handlerFilter = () => {
    let searchWords = [];
    if (this.state.filter) {
      searchWords = this.state.words.filter(word =>
        word.enWord.toLowerCase().includes(this.state.filter.toLowerCase())
      );
    } else {
      searchWords = this.state.words;
    }
    return searchWords;
  };

  render() {
    return (
      <div>
        <WordsForm
          handleAddWord={this.handleAddWord}
          // increaseNumber={this.increaseNumber}
        />
        <WordsFilter
          filter={this.state.filter}
          handleFilterChange={this.handleFilterChange}
        />
        <WordsList
          // words={this.state.words}
          words={this.handlerFilter()}
          handleDelete={this.handleDelete}
          number={this.state.number}
        />
      </div>
    );
  }
}
