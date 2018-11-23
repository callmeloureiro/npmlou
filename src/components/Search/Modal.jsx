import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { withSearchContext } from 'Components/Search/Context';

import Modal from 'Components/Modal';

import './Search.sass';

const ModalSearch = ({ children, index, handleCloseModal, searchContext }) => {
  const notRender = !index && index !== 0;

  if (notRender) {
    return null;
  }

  const { results } = searchContext.store;
  const infosPackage = results[index];
  const { date, description, links, name, version } = infosPackage.package;

  return (
    <Modal closeModal={handleCloseModal} className="search__modal" title={name}>
      <i className="search__separator" />
      <ul className="search__modal-infos">
        <li>
          <span>
            <strong>Current version:</strong> {version}
          </span>
        </li>
        <li>
          <span>
            <strong>Last update:</strong> {moment(date).calendar()}
          </span>
        </li>
      </ul>
      <i className="search__separator" />
      <p className="search__modal-description">{description}</p>
      <i className="search__separator" />
      <ul className="search__modal-links">
        {Object.keys(links).map(elm => (
          <li key={links[elm]}>
            <strong>{elm}:</strong>{' '}
            <a href={links[elm]} target="_blank" rel="noopener noreferrer">
              {links[elm]}
            </a>
          </li>
        ))}
      </ul>
    </Modal>
  );
};

ModalSearch.defaultProps = {
  index: null,
};

ModalSearch.propTypes = {
  index: PropTypes.number,
  handleCloseModal: PropTypes.func.isRequired,
};

export default withSearchContext(ModalSearch);
