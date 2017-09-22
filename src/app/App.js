// {React.cloneElement({...props}.children, {...props})}

import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import OnlyAuthRoute from '../components/OnlyAuthRoute';
import OnlyUnauthRoute from '../components/OnlyUnauthRoute';
import DashboardView from '../features/dashboard/components/DashboardView';
import LoginView from '../features/session/components/LoginView';
//import '../../styles/bootswatch.css';

const App = () => (
  <Switch>
    <OnlyUnauthRoute path="/auth" component={LoginView}/>
    <OnlyUnauthRoute exact path="/" render={() => <Redirect to="/auth" />} />
    <OnlyAuthRoute path="/dashboard" component={DashboardView}/>
  </Switch>
);

export default App;
