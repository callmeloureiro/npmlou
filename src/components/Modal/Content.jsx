import React from 'react';
import classNames from 'classnames';

import './Modal.sass';

const ModalContent = ({
  children,
  closeModal,
  className: classNameFromProps,
  title,
}) => {
  const className = classNames({
    modal: true,
    [classNameFromProps]: !!classNameFromProps,
  });

  return (
    <div className={className}>
      <div className="modal__container">
        <div className="modal__header">
          {title && <h3 className="modal__title">{title}</h3>}
          <button className="modal__button-close" onClick={closeModal}>
            <i className="fas fa-times" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalContent;
