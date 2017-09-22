import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PatientContextTabs from '../../../patient-context/components/PatientContextTabs/PatientContextTabs';
import PatientSectionTableView from '../../components/PatientSectionTable/PatientSectionTableView';
import { Route, Switch } from 'react-router-dom';
import { ENDPOINTS } from '../../endpoints';
import { COLUMNS } from '../../section_columns';
import { SUBCOLUMNS } from '../../section_subcolumns';

export default class PatientPrevalenceLayout extends Component {
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
    const tabsPrevalence = [{ 'tab_name': 'Milliman', 'route': '/dashboard/patients/prevalence/milliman', 'resource': ENDPOINTS.MILLIMAN, 'hasSubTable': false},
                            { 'tab_name': 'HCC Category', 'route': '/dashboard/patients/prevalence/hcccategory', 'resource': ENDPOINTS.HCC_CATEGORY, 'hasSubTable': false},
                            { 'tab_name': 'Compliance Category', 'route': '/dashboard/patients/prevalence/compliancecategory', 'resource': ENDPOINTS.COMPLIANCE_CATEGORY, 'hasSubTable': false}];

    return (

      <div>
        <PatientContextTabs reloadFunction={this.reloadTableInfo} history={history} tabs={tabsPrevalence} />

        <div className="panel-container" >
          <Switch>

            <Route path="/dashboard/patients/prevalence/milliman"
              render={() => <PatientSectionTableView history={history} columns={COLUMNS.MILLIMAN} subcolumns={SUBCOLUMNS.MILLIMAN} resource={ENDPOINTS.MILLIMAN} />} />

            <Route path="/dashboard/patients/prevalence/hcccategory"
              render={() => <PatientSectionTableView history={history} columns={COLUMNS.HCC_CATEGORY} subcolumns={SUBCOLUMNS.HCC_CATEGORY} resource={ENDPOINTS.HCC_CATEGORY} />} />

              <Route path="/dashboard/patients/prevalence/compliancecategory"
              render={() => <PatientSectionTableView history={history} columns={COLUMNS.COMPLIANCE_CATEGORY} subcolumns={SUBCOLUMNS.COMPLIANCE_CATEGORY} resource={ENDPOINTS.COMPLIANCE_CATEGORY} />} />

          </Switch>
        </div>
      </div>

    );
  }
}
