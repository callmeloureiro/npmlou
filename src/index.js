import React from 'react';
import ReactDOM from 'react-dom';

import SearchContext from 'Components/Search/Context';

import HomePage from 'Pages/HomePage';

import * as serviceWorker from './serviceWorker';

import './styles/base.sass';

const App = () => (
  <SearchContext>
    <HomePage />
  </SearchContext>
);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
