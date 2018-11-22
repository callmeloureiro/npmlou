import React from 'react';

import Loader from 'Components/Loader';

import './Search.sass';

const handleClick = link => window.open(link);

const SearchList = ({ results, loading }) => {
  if (!loading && !results) return null;

  if (!!loading) {
    return (
      <div className="search__loading search__list">
        <Loader />
      </div>
    );
  }

  if (Array.from(results).length === 0) {
    return (
      <div className="search__list search__list--nostyle">
        <p>No results for this search.</p>
      </div>
    );
  }

  return (
    <ul className="search__list">
      {results.map((pkg, index) => {
        const { name, description, version, links } = pkg.package;
        const { repository } = links;

        return (
          <li
            key={`pkg-${index}`}
            className="search__list-item"
            onClick={() => handleClick(repository)}
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
