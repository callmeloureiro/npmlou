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
  state = {
    loading: null,
    valueSearched: null,
    fetchedPackages: null,
  };

  handleGetPackages = async value => {
    if (!value || value === this.state.valueSearched) return null;

    this.setState({
      loading: true,
    });

    const fetchedPackages = await getPackage(value);
    const { results } = fetchedPackages;

    this.setState({
      loading: false,
      valueSearched: value,
      results,
    });
  };

  render() {
    const { children } = this.props;

    return (
      <SearchContext.Provider
        value={{
          store: this.state,
          handleGetPackages: this.handleGetPackages,
        }}
      >
        {children}
      </SearchContext.Provider>
    );
  }
}

export { SearchContextProvider as default, withSearchContext };
