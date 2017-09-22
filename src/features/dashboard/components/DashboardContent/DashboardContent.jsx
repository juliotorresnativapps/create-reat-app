import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Summary from '../../../../features/summary';
import Cost from '../../../../features/cost/components/GeneralCostView';
import Predictive from '../../../../features/predictive';
import AdminSection from '../../../../features/admin';
import PatientContext from '../../../patient-context/components/PatientContextView';

export default class DashboardContent extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    const { history } = this.props;

    return (
      <Switch>
        <Route path="/dashboard/analytics/cost" history={history} component={Cost}/>
        <Route path="/dashboard/analytics/predictive" component={Predictive}/>
        <Route path="/dashboard/admin" component={AdminSection}/>
        <Route path="/dashboard/patients" render={() => <PatientContext/>}/>
        <Route path="/dashboard/settings" render={() => <h2>Settings View</h2>}/>
        <Route path="/dashboard" history={history} component={Summary}/>
      </Switch>
    );
  }
}
