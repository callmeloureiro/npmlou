import React, { Component, createContext } from 'react';
import getPackage from 'Services/getPackage';

const SearchContext = createContext();

const withSearchContext = WrapperComponent => props => (
  <SearchContext.Consumer>
    {searchContext => (
      <WrapperComponent {...props} searchContext={searchContext} />
    )}
  </SearchContext.Consumer>
);

class SearchContextProvider extends Component {
  handleGetPackages = async value => {
    const { valueSearched } = this.state.store;

    if (!value || value === valueSearched) return null;

    this.setState(prevState => ({
      store: {
        ...prevState.store,
        loading: true,
      },
    }));

    const fetchedPackages = await getPackage(value);
    const { results } = fetchedPackages;

    this.setState(prevState => ({
      store: {
        ...prevState.store,
        loading: false,
        valueSearched: value,
        results,
      },
    }));
  };

  handleOpenModal = idx => {
    this.setState(prevState => ({
      store: {
        ...prevState.store,
        resultIndex: idx,
      },
    }));
  };

  handleCloseModal = () => {
    this.setState(prevState => ({
      store: {
        ...prevState.store,
        resultIndex: null,
      },
    }));
  };

  state = {
    store: {
      loading: null,
      valueSearched: null,
      results: null,
      resultIndex: null,
    },
    handleGetPackages: this.handleGetPackages,
    handleOpenModal: this.handleOpenModal,
    handleCloseModal: this.handleCloseModal,
  };

  render() {
    const { children } = this.props;

    return (
      <SearchContext.Provider value={this.state}>
        {children}
      </SearchContext.Provider>
    );
  }
}

export { SearchContextProvider as default, withSearchContext };
