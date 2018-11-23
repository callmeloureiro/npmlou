import React from 'react';
import { SearchForm, SearchList, SearchModal } from 'Components/Search';
import { withSearchContext } from 'Components/Search/Context';

import './Search.sass';

const Search = ({ searchContext }) => {
  const {
    handleGetPackages,
    handleOpenModal,
    handleCloseModal,
    store,
  } = searchContext;
  const { loading, results, resultIndex } = store;

  return (
    <div className="search__container">
      <SearchForm submit={handleGetPackages} />
      <SearchList
        results={results}
        loading={loading}
        handleOpenModal={handleOpenModal}
      />
      <SearchModal index={resultIndex} handleCloseModal={handleCloseModal} />
    </div>
  );
};

export default withSearchContext(Search);
