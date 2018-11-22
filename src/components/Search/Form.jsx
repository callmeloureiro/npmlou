import React, { Component, createRef } from 'react';
import './Search.sass';

class SearchForm extends Component {
  inputElm = createRef();

  handleSubmit = e => {
    e.preventDefault();

    const { submit } = this.props;
    const { value } = this.inputElm.current;

    submit(value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search__form">
        <input placeholder="Package" type="text" ref={this.inputElm} />
        <small>Press enter to search.</small>
      </form>
    );
  }
}

export default SearchForm;
