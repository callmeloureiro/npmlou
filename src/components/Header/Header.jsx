import React from 'react';
import classNames from 'classnames';

import Column from 'Components/Column';
import Row from 'Components/Row';
import Container from 'Components/Container';

import { withSearchContext } from 'Components/Search/Context';

import './Header.sass';

const Header = props => {
  const { searchContext, className: classNameFromProps } = props;
  const { results } = searchContext.store;

  const className = classNames({
    header: true,
    'header--top': !!results,
    [classNameFromProps]: !!classNameFromProps,
  });

  return (
    <header className={className}>
      <Container>
        <Row>
          <Column>
            <h1 className="header__title">npmlou</h1>
          </Column>
        </Row>
      </Container>
    </header>
  );
};

export default withSearchContext(Header);
