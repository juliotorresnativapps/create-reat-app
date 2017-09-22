import api from './api';

export const actions = {
  ATTEMPT_SET_DROPDOWN_TABLE_INFO: 'ATTEMPT_SET_DROPDOWN_TABLE_INFO',
  SET_DROPDOWN_TABLE_INFO_SUCCEEDED: 'SET_DROPDOWN_TABLE_INFO_SUCCEEDED',
  SET_DROPDOWN_TABLE_INFO__FAILED: 'SET_DROPDOWN_TABLE_INFO__FAILED',
  SET_SEARCH_PATIENT_LIST: 'SET_SEARCH_PATIENT_LIST',
  ATTEMPT_SEARCH_PATIENT_LIST: 'ATTEMPT_SEARCH_PATIENT_LIST',
  SEARCH_PATIENTS_LIST_SUCCEEDED: 'SEARCH_PATIENTS_LIST_SUCCEEDED',
  SEARCH_PATIENT_LIST_FAILED: 'SEARCH_PATIENT_LIST_FAILED'
};

const defaultState = {
  dropwdownTableInfo: { 'name': '', 'medical_record_number': '', 'birthdate': '',
    'phone_number': '', 'attributed_provider': '', 'payer': '',
    'next_visit': { 'date': '', 'rendering': '', 'location': '', 'speciality': '', 'status': '' },
    'last_visit': { 'date': '', 'rendering': '', 'location': '', 'speciality': '', 'status': '' } },
  patientSearchList: [],
  isLoadingPatients: false,
  errorInfo: undefined
};

export const actionCreators = {
  attemptSetDropdownTableInfo: () => ({
    type: actions.ATTEMPT_SET_DROPDOWN_TABLE_INFO
  }),

  setDropdownTableInfoSucceeded: (patients) => ({
    type: actions.SET_DROPDOWN_TABLE_INFO_SUCCEEDED,
    payload: patients
  }),

  setDropdownTableInfoFailed: (errorInfo) => ({
    type: actions.SET_DROPDOWN_TABLE_INFO__FAILED,
    payload: errorInfo
  }),

  setDropdownTableInfo(patientId) {
    return (dispatch) => {
      dispatch(actionCreators.attemptSetDropdownTableInfo());
      api.post('/searchPatientInfo', { patientId })
        .then((res) =>
          dispatch(actionCreators.setDropdownTableInfoSucceeded(res.data))
        )
        .catch((err) =>
          dispatch(actionCreators.setDropdownTableInfoFailed(err.response.data))
        );
    };
  },

  attemptSearchPatientList: () => ({
    type: actions.ATTEMPT_SEARCH_PATIENT_LIST
  }),

  searchPatientListSucceeded: (patients) => ({
    type: actions.SEARCH_PATIENTS_LIST_SUCCEEDED,
    payload: patients
  }),

  searchPatientListFailed: (errorInfo) => ({
    type: actions.SEARCH_PATIENT_LIST_FAILED,
    payload: errorInfo
  }),

  setSearchPatientList(args) {
    return (dispatch) => {
      dispatch(actionCreators.attemptSearchPatientList());
      api.post('/searchPatients', { ...args })
        .then((res) =>
          dispatch(actionCreators.searchPatientListSucceeded(res.data))
        )
        .catch((err) =>
          dispatch(actionCreators.searchPatientListFailed(err.response.data))
        );
      // llamar con axios a la api
      // Si falla, indicarlo y guardar el error
      // Si funciona, indicarlo y guardar la lista de patients.
      //type: actions.SET_SEARCH_PATIENT_LIST,
      //payload: patients
    };
  }
};

export default function (state = defaultState, action) {
  switch (action.type) {

    case actions.SET_DROPDOWN_TABLE_INFO_SUCCEEDED: {
      return {
        ...state,
        dropwdownTableInfo: action.payload
      };
    }

    case actions.ATTEMPT_SET_DROPDOWN_TABLE_INFO:
      return {
        ...state,
      };

    case actions.SET_DROPDOWN_TABLE_INFO__FAILED:
      return {
        ...state,
        searchErrors: action.payload,
      };

    case actions.ATTEMPT_SEARCH_PATIENT_LIST:
      return {
        ...state,
        isLoadingPatients: true
      };

    case actions.SEARCH_PATIENTS_LIST_SUCCEEDED:
      return {
        ...state,
        patientSearchList: action.payload,
        isLoadingPatients: false
      };

    case actions.SEARCH_PATIENT_LIST_FAILED:
      return {
        ...state,
        searchErrors: action.payload,
        isLoadingPatients: false
      };

    default: return state;
  }
}

export const NAME = 'patient-search-list';
