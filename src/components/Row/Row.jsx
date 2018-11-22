import React from 'react';
import classNames from 'classnames';
import './Row.sass';

const Row = ({ children, className: classNameFromProps }) => {
  const className = classNames({
    row: true,
    [classNameFromProps]: !!classNameFromProps,
  });

  return <div className={className}>{children}</div>;
};

export default Row;
