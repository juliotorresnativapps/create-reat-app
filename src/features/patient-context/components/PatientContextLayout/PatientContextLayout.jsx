import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppointmentTable from '../AppointmentTable/AppointmentTable';
import PatientTopNavBar from '../PatientTopNavBar/PatientTopNavBar';
import PatientContextClinical from '../../../patient-context-clinical/components/PatientClinicalView';
import PatientContextPrevalence from '../../../patient-context-prevalence/components/PatientPrevalenceView';
import PatientContextPredictive from '../../..//patient-context-predictive/components/PatientPredictiveView';
import '../../../../styles/components/_PanelContainer.scss';
import '../../../../styles/components/_FilterMenu.scss';
import '../../../../styles/components/_TopBar.scss';
import { Route, Switch } from 'react-router-dom';

export default class PatientContextLayout extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    dropwdownTableInfo: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    const { history, dropwdownTableInfo } = this.props;

    return (

      <div>
        <PatientTopNavBar selectedNode={dropwdownTableInfo} />
        <div>
          <AppointmentTable dropwdownTableInfo={dropwdownTableInfo} selectedNode={dropwdownTableInfo} />
        </div>

        <Switch>
          <Route path="/dashboard/patients/clinical" render={() => <PatientContextClinical history={history}  />} />
        </Switch>

        <Switch>
          <Route path="/dashboard/patients/prevalence" render={() => <PatientContextPrevalence history={history}  />} />
        </Switch>

        <Switch>
          <Route path="/dashboard/patients/predictive" render={() => <PatientContextPredictive history={history}  />} />
        </Switch>
      </div>

    );
  }
}
