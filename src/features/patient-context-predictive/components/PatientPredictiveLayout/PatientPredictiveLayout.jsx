import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PatientContextTabs from '../../../patient-context/components/PatientContextTabs/PatientContextTabs';
import MillimanView from '../../features/Milliman/MillimanView';
import ComplianceView from '../../features/Compliance/ComplianceView';
import RAFView from '../../features/RAF/RAFView';
import { Route, Switch } from 'react-router-dom';
import { ENDPOINTS } from '../../endpoints';
import { COLUMNS } from '../../section_columns';

export default class PatientPredictiveLayout extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    session: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.reloadTableInfo = this.reloadTableInfo.bind(this);
    this.reloadTableInfoWithSubTable = this.reloadTableInfoWithSubTable.bind(this);
    this.reloadFunction = this.reloadFunction.bind(this);
  }

  reloadTableInfo(resource) {
    const { actions, session } = this.props;
    actions.setTableInfo(session, resource, { page: 0, selectedColumn: undefined, selectedColumnModifier: undefined }, false);
  }

  reloadTableInfoWithSubTable(resource) {
    const { actions, session } = this.props;
    actions.setSubTableInfo(session, resource.subTable);
    actions.setTableInfo(session, resource.mainTable, { page: 0, selectedColumn: undefined, selectedColumnModifier: undefined }, true);
  }

  reloadFunction(resource, hasSubTable){
    if(hasSubTable){
      this.reloadTableInfoWithSubTable(resource);
    }else{
      this.reloadTableInfo(resource);
    }
  }

  render() {
    const { history } = this.props;
    const tabsPrevalence = [{ 'tab_name': 'Milliman', 'route': '/dashboard/patients/predictive/milliman', 'resource': ENDPOINTS.MILLIMAN, 'hasSubTable': true },
                            { 'tab_name': 'Compliance', 'route': '/dashboard/patients/predictive/compliance', 'resource': ENDPOINTS.COMPLIANCE, 'hasSubTable': false },
                            { 'tab_name': 'RAF', 'route': '/dashboard/patients/predictive/raf', 'resource': ENDPOINTS.RAF, 'hasSubTable': false }];

    return (

      <div>
        <PatientContextTabs reloadFunction={this.reloadFunction} history={history} tabs={tabsPrevalence} />

        <div className="panel-container" >
          <Switch>

            <Route path="/dashboard/patients/predictive/milliman"
              render={() => <MillimanView history={history} columns={COLUMNS.MILLIMAN}  resource={ENDPOINTS.MILLIMAN} />} />

            <Route path="/dashboard/patients/predictive/compliance"
              render={() => <ComplianceView history={history} columns={COLUMNS.COMPLIANCE}  resource={ENDPOINTS.COMPLIANCE} />} />

            <Route path="/dashboard/patients/predictive/raf"
              render={() => <RAFView history={history} columns={COLUMNS.RAF}  resource={ENDPOINTS.RAF} />} />

          </Switch>
        </div>
      </div>

    );
  }
}
