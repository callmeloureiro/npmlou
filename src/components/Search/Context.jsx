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
    if (!value || value === this.state.store.valueSearched) return null;

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

  state = {
    store: {
      loading: null,
      valueSearched: null,
      results: null,
    },
    handleGetPackages: this.handleGetPackages,
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
