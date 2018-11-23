import React from 'react';

import Loader from 'Components/Loader';

import { isEmpty } from 'Utils';

import './Search.sass';

const SearchList = ({ results, loading, handleOpenModal }) => {
  if (!loading && !results) return null;

  if (!!loading) {
    return (
      <div className="search__loading search__list">
        <Loader />
      </div>
    );
  }

  if (isEmpty(results)) {
    return (
      <div className="search__list search__list--nostyle">
        <p>No results for this search.</p>
      </div>
    );
  }

  return (
    <ul className="search__list">
      {results.map((pkg, index) => {
        const { name, description, version } = pkg.package;

        return (
          <li
            key={`pkg-${name}`}
            className="search__list-item"
            onClick={() => handleOpenModal(index)}
          >
            <div className="search__list-item__header">
              <h2>{name}</h2>
              <span>
                <i className="fa fa-tag" />
                {version}
              </span>
            </div>
            <div className="search__list-item__content">
              <p>{description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchList;
