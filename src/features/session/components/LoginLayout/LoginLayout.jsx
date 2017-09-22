import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import './_LoginLayout.scss';
import Login from '../Login';
import LostAuth from '../LostAuth';

export default class LoginLayout extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    session: PropTypes.object.isRequired
  }

  render() {
    const { actions, session } = this.props;
    return (
      <div className="layout">
        <Switch>
          <Route path="/auth/lost" component={LostAuth} />
          <Route path="/auth" render={() => <Login login={actions.login} session={session} />} />
        </Switch>
      </div>
    );
  }
}

