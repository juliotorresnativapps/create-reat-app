import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import NotFoundView from '../components/NotFound';

export default (
  <Switch>
    <Route path="/" component={App}/>
    <Route component={NotFoundView} />
  </Switch>
);
