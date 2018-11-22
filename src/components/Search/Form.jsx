import React, { Component } from 'react';
import './Search.sass';

class SearchForm extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const { submit } = this.props;
    const { value } = this.inputElm;

    submit(value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search__form">
        <input
          placeholder="Package"
          type="text"
          ref={input => (this.inputElm = input)}
        />
        <small>Press enter to search.</small>
      </form>
    );
  }
}

export default SearchForm;
