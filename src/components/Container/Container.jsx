import React from 'react';
import classNames from 'classnames';
import './Container.sass';

const Container = ({ children, fluid, className: classNameFromProps }) => {
  const className = classNames({
    container: true,
    'container--1120': !fluid,
    [classNameFromProps]: !!classNameFromProps,
  });

  return <div className={className}>{children}</div>;
};

export default Container;
