import React from 'react';
import classNames from 'classnames';
import './Column.sass';

const Column = ({ children, className: classNameFromProps }) => {
  const className = classNames({
    column: true,
    [classNameFromProps]: !!classNameFromProps,
  });

  return <div className={className}>{children}</div>;
};

export default Column;
