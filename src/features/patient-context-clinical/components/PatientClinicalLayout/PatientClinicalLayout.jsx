import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PatientContextTabs from '../../../patient-context/components/PatientContextTabs/PatientContextTabs';
import PatientSectionTableView from '../../components/PatientSectionTable/PatientSectionTableView';
import SocialHistoryView from '../../features/SocialHistory/SocialHistoryView';
import { Route, Switch } from 'react-router-dom';
import { ENDPOINTS } from '../../endpoints';
import { COLUMNS } from '../../section_columns';

export default class PatientClinicalLayout extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    session: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.reloadTableInfo = this.reloadTableInfo.bind(this);
  }

  reloadTableInfo(resource) {
    const { actions, session } = this.props;
    actions.setTableInfo(session, resource, { page: 0, selectedColumn: undefined, selectedColumnModifier: undefined });
  }

  render() {
    const { history } = this.props;
    const tabsClinical = [{ 'tab_name': 'Appointments', 'route': '/dashboard/patients/clinical/appointment', 'resource': ENDPOINTS.APPOINTMENT, 'hasSubTable': false },
    { 'tab_name': 'Vitals', 'route': '/dashboard/patients/clinical/vitals', 'resource': ENDPOINTS.VITALS, 'hasSubTable': false },
    { 'tab_name': 'Labs', 'route': '/dashboard/patients/clinical/labs', 'resource': ENDPOINTS.LABS, 'hasSubTable': false },
    { 'tab_name': 'Orders', 'route': '/dashboard/patients/clinical/orders', 'resource': ENDPOINTS.ORDERS, 'hasSubTable': false },
    { 'tab_name': 'Problem List', 'route': '/dashboard/patients/clinical/problemList', 'resource': ENDPOINTS.PROBLEM_LIST, 'hasSubTable': false },
    { 'tab_name': 'Diagnoses', 'route': '/dashboard/patients/clinical/diagnoses', 'resource': ENDPOINTS.DIAGNOSES, 'hasSubTable': false },
    { 'tab_name': 'Immunizations', 'route': '/dashboard/patients/clinical/immunizations', 'resource': ENDPOINTS.IMMUNIZATIONS, 'hasSubTable': false },
    { 'tab_name': 'Medications', 'route': '/dashboard/patients/clinical/medications', 'resource': ENDPOINTS.MEDICATIONS, 'hasSubTable': false },
    { 'tab_name': 'Allergies', 'route': '/dashboard/patients/clinical/allergies', 'resource': ENDPOINTS.ALLERGIES, 'hasSubTable': false },
    { 'tab_name': 'Social History', 'route': '/dashboard/patients/clinical/socialhistory', 'resource': ENDPOINTS.SOCIAL_HISTORY.alcoholAndTobacco, 'hasSubTable': false }];

    return (

      <div>
        <PatientContextTabs reloadFunction={this.reloadTableInfo} history={history} tabs={tabsClinical} />

        <div className="panel-container" >
          <Switch>
            <Route path="/dashboard/patients/clinical/appointment"
              render={() => <PatientSectionTableView history={history} columns={COLUMNS.APPOINTMENT} resource={ENDPOINTS.APPOINTMENT} />} />

            <Route path="/dashboard/patients/clinical/vitals"
              render={() => <PatientSectionTableView history={history} columns={COLUMNS.VITALS} resource={ENDPOINTS.VITALS} />} />

            <Route path="/dashboard/patients/clinical/labs"
              render={() => <PatientSectionTableView history={history} columns={COLUMNS.LABS} resource={ENDPOINTS.LABS} />} />

            <Route path="/dashboard/patients/clinical/orders"
              render={() => <PatientSectionTableView history={history} columns={COLUMNS.ORDERS} resource={ENDPOINTS.ORDERS} />} />

            <Route path="/dashboard/patients/clinical/problemList"
              render={() => <PatientSectionTableView history={history} columns={COLUMNS.PROBLEM_LIST} resource={ENDPOINTS.PROBLEM_LIST} />} />

            <Route path="/dashboard/patients/clinical/diagnoses"
              render={() => <PatientSectionTableView history={history} columns={COLUMNS.DIAGNOSES} resource={ENDPOINTS.DIAGNOSES} />} />

            <Route path="/dashboard/patients/clinical/immunizations"
              render={() => <PatientSectionTableView history={history} columns={COLUMNS.IMMUNIZATIONS} resource={ENDPOINTS.IMMUNIZATIONS} />} />

            <Route path="/dashboard/patients/clinical/medications"
              render={() => <PatientSectionTableView history={history} columns={COLUMNS.MEDICATIONS} resource={ENDPOINTS.MEDICATIONS} />} />

            <Route path="/dashboard/patients/clinical/allergies"
              render={() => <PatientSectionTableView history={history} columns={COLUMNS.ALLERGIES} resource={ENDPOINTS.ALLERGIES} />} />

            <Route path="/dashboard/patients/clinical/socialHistory"
              render={() => <SocialHistoryView history={history} columns={COLUMNS.SOCIAL_HISTORY} resource={ENDPOINTS.SOCIAL_HISTORY} />} />

          </Switch>
        </div>
      </div>

    );
  }
}
