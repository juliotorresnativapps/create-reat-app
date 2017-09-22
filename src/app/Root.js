import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import routes from './routes';
import { SENTRY_URL } from './config';

import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../styles/styles.scss';

window.jQuery = $;;

console.log($)

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182


const Root = ({ store, history }) => {
  let ComponentEl = (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {routes}
      </ConnectedRouter>
    </Provider>
  );

  if (process.env.NODE_ENV !== 'production') {
    const DevTools = require('./DevTools').default;

    ComponentEl = (
      <Provider store={store}>
        <div>
          <ConnectedRouter history={history}>
            {routes}
          </ConnectedRouter>
          {!window.devToolsExtension ? <DevTools /> : null}
        </div>
      </Provider>
    );
  }

  return ComponentEl;
};

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default Root;
