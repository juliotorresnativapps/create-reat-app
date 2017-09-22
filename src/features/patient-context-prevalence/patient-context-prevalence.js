import api from './api';

export const actions = {
  GET_TABLE_INFO: 'GET_TABLE_INFO_PREVALENCE',
  ATTEMPT_SET_TABLE_INFO: 'ATTEMPT_SET_TABLE_INFO_PREVALENCE',
  SET_TABLE_INFO_SUCCEEDED: 'SET_TABLE_INFO_SUCCEEDED_PREVALENCE',
  SET_TABLE_INFO__FAILED: 'SET_TABLE_INFO__FAILED_PREVALENCE',
  ORDER_SUB_TABLE_INFO: 'ORDER_SUB_TABLE_INFO_PREVALENCE'
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
  selectedColumnModifier: undefined
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
    totalNumber: 42,
    page: config.page,
    selectedColumn: config.selectedColumn,
    selectedColumnModifier: config.selectedColumnModifier
  }),

  setTableInfoFailed: (errorInfo) => ({
    type: actions.SET_TABLE_INFO__FAILED,
    payload: errorInfo
  }),

  orderSubTableInfo: (tInfo) => ({
    type: actions.ORDER_SUB_TABLE_INFO,
    payload: tInfo
  }),

  setTableInfo(session, resourse, config) {
    return (dispatch) => {
      dispatch(actionCreators.attemptsetTableInfo());
      api.post(resourse)
        .then((res) =>
          dispatch(actionCreators.setTableInfoSucceeded(res, config))
        )
        .catch((err) =>
          dispatch(actionCreators.setTableInfoFailed(err.response.data))
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

      case actions.ORDER_SUB_TABLE_INFO:
      return {
        ...state,
        tableInfo: action.payload
      };

    default: return state;
  }
}

export const NAME = 'PatientContextPrevalence';
