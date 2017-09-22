import api from './api';

export const actions = {
  GET_TABLE_INFO: 'GET_TABLE_INFO_PREDICTIVE',
  ATTEMPT_SET_TABLE_INFO: 'ATTEMPT_SET_TABLE_INFO_PREDICTIVE',
  SET_TABLE_INFO_SUCCEEDED: 'SET_TABLE_INFO_SUCCEEDED_PREDICTIVE',
  SET_TABLE_INFO__FAILED: 'SET_TABLE_INFO__FAILED_PREDICTIVE',
  ATTEMPT_SET_SUB_TABLE_INFO: 'ATTEMPT_SET_SUB_TABLE_INFO_PREDICTIVE',
  SET_SUB_TABLE_INFO_SUCCEEDED: 'SET_SUB_TABLE_INFO_SUCCEEDED_PREDICTIVE',
  SET_SUB_TABLE_INFO__FAILED: 'SET_SUB_TABLE_INFO__FAILED_PREDICTIVE',
  SET_MILLIMAN_TABLE_INFO_SUCCEEDED: 'SET_MILLIMAN_TABLE_INFO_SUCCEEDED_PREDICTIVE'

};

const defaultState = {
  tableInfo: [],
  totalNumberOfEntities: 0,
  currentPage: 0,
  pageSize: 14,
  selectedOperation: '',
  isGettingPage: false,
  paginationErrors: undefined,
  selectedColumn: undefined,
  selectedColumnModifier: undefined,
  score: 0,
  extraTable: []
};

const defaultPaginationConfig = {
  page: 0
};

export const actionCreators = {

  attemptsetTableInfo: () => ({
    type: actions.ATTEMPT_SET_TABLE_INFO
  }),

  setTableInfoSucceeded: (info, config) => ({
    type: actions.SET_TABLE_INFO_SUCCEEDED,
    payload: info.data,
    score: info.score,
    totalNumber: 42,
    page: config.page,
    selectedColumn: config.selectedColumn,
    selectedColumnModifier: config.selectedColumnModifier
  }),

  setMillimanTableInfoSucceeded: (info, config) => ({
    type: actions.SET_MILLIMAN_TABLE_INFO_SUCCEEDED,
    payload: info.data,
    totalNumber: 42,
    page: config.page,
    selectedColumn: config.selectedColumn,
    selectedColumnModifier: config.selectedColumnModifier
  }),

  setTableInfoFailed: (errorInfo) => ({
    type: actions.SET_TABLE_INFO__FAILED,
    payload: errorInfo
  }),

  setTableInfo(session, resourse, config, isMilliman) {
    return (dispatch) => {
      dispatch(actionCreators.attemptsetTableInfo());
      api.post(resourse)
        .then((res) => {
          if (isMilliman) {
            dispatch(actionCreators.setMillimanTableInfoSucceeded(res, config));
          } else {
            dispatch(actionCreators.setTableInfoSucceeded(res, config));
          }

        })
        .catch((err) =>
          dispatch(actionCreators.setTableInfoFailed(err.response.data))
        );
    };
  },

  attemptsetSubTableInfo: () => ({
    type: actions.ATTEMPT_SET_SUB_TABLE_INFO
  }),

  setSubTableInfoSucceeded: (info) => ({
    type: actions.SET_SUB_TABLE_INFO_SUCCEEDED,
    payload: info.data,
    score: info.score
  }),

  setSubTableInfoFailed: (errorInfo) => ({
    type: actions.SET_SUB_TABLE_INFO__FAILED,
    payload: errorInfo
  }),

  setSubTableInfo(session, resourse) {
    return (dispatch) => {
      dispatch(actionCreators.attemptsetSubTableInfo());
      api.post(resourse)
        .then((res) =>
          dispatch(actionCreators.setSubTableInfoSucceeded(res))
        )
        .catch((err) =>
          dispatch(actionCreators.setSubTableInfoFailed(err.response.data))
        );
    };
  }

};

export default function (state = defaultState, action) {
  switch (action.type) {

    case actions.SET_TABLE_INFO_SUCCEEDED: {
      return {
        ...state,
        tableInfo: action.payload,
        currentPage: action.page,
        totalNumberOfEntities: action.totalNumber,
        selectedColumn: action.selectedColumn,
        selectedColumnModifier: action.selectedColumnModifier,
        score: 0
      };
    }

    case actions.SET_MILLIMAN_TABLE_INFO_SUCCEEDED: {
      return {
        ...state,
        tableInfo: action.payload,
        currentPage: action.page,
        totalNumberOfEntities: action.totalNumber,
        selectedColumn: action.selectedColumn,
        selectedColumnModifier: action.selectedColumnModifier
      };
    }

    case actions.ATTEMPT_SET_TABLE_INFO:
      return {
        ...state,
      };

    case actions.SET_TABLE_INFO__FAILED:
      return {
        ...state,
        paginationErrors: action.payload
      };

    case actions.SET_SUB_TABLE_INFO_SUCCEEDED: {
      return {
        ...state,
        extraTable: [],
        score: 0,
        //extraTable: action.extraTable
      };
    }

    case actions.SET_SUB_TABLE_INFO__FAILED:
      return {
        ...state,
        paginationErrors: action.payload
      };

    case actions.ATTEMPT_SET_SUB_TABLE_INFO:
      return {
        ...state,
      };

    default: return state;
  }
}

export const NAME = 'PatientContextPredictive';
