import React from 'react';
import { SearchForm, SearchList } from 'Components/Search';
import { withSearchContext } from 'Components/Search/Context';

import './Search.sass';

const Search = ({ searchContext }) => {
  const { handleGetPackages, store } = searchContext;
  const { loading, results } = store;

  return (
    <div className="search__container">
      <SearchForm submit={handleGetPackages} />
      <SearchList results={results} loading={loading} />
    </div>
  );
};

export default withSearchContext(Search);
