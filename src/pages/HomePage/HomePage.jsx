import React, { Component } from 'react';

import Column from 'Components/Column';
import Container from 'Components/Container';
import Row from 'Components/Row';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Search from 'Components/Search';

import './HomePage.sass';

class HomePage extends Component {
  render() {
    return (
      <div className="lou-home">
        <Header />
        <main>
          <Container>
            <Row>
              <Column>
                <Search />
              </Column>
            </Row>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
