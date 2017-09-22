import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import session, { NAME as sessionName } from '../../features/session';

import cost, { NAME as costName } from '../../features/cost';
import predictive from '../../features/predictive/reducer';
import procedureCategories from './procedureCategories';
import procedure from './procedure';
import diagnosisCategories from './diagnosisCategories';
import diagnosis from './diagnosis';
import pharmacy from './pharmacy';
import medication from './medication';
import entityCRUD, { NAME as entityCRUDName } from '../../components/EntityCRUD';
import selectedNode, { NAME as selectedNodeName } from '../../features/selected-node';
import patientSearchList, { NAME as patientSearchListName } from '../../features/patient-search-list';
import patientContextClinical, { NAME as patientContextClinicalName } from '../../features/patient-context-clinical';
import patientContextPrevalence, { NAME as patientContextPrevalenceName } from '../../features/patient-context-prevalence';
import patientContextPredictive, { NAME as patientContextPredictiveName } from '../../features/patient-context-predictive';

export default combineReducers({
  [sessionName]: session,
  [costName]: cost,
  [entityCRUDName]: entityCRUD,
  router: routerReducer,
  predictive, diagnosisCategories,
  diagnosis, pharmacy,
  [selectedNodeName]: selectedNode,
  [patientSearchListName]: patientSearchList,
  [patientContextClinicalName]: patientContextClinical,
  [patientContextPrevalenceName]: patientContextPrevalence,
  [patientContextPredictiveName]: patientContextPredictive,
  medication
});
