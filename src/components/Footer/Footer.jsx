import React from 'react';

import Column from 'Components/Column';
import Row from 'Components/Row';
import Container from 'Components/Container';

import './Footer.sass';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Column>
            <p>
              Developed with <i className="fa fa-heart" /> by{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://github.com/callmeloureiro"
              >
                Matheus Loureiro
              </a>
            </p>
          </Column>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
