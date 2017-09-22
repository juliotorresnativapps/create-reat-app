import api from '../../app/api';
import { ENDPOINTS } from './endpoints';
import lodash from 'lodash';

export const actions = {
  ADD_PARTS: 'ADD_PARTS',
  ADD_MEDICATIONS: 'ADD_MEDICATIONS',
  ADD_TRENDS: 'ADD_TRENDS',
  FILTER_BY_NAME: 'FILTER_BY_NAME',
  UNDO: 'UNDO'
};

export const actionCreators = {
  addParts: (parts) => ({
    type: actions.ADD_PARTS,
    payload: {
      parts
    }
  }),
  addTrends: (trends) => ({
    type: actions.ADD_TRENDS,
    payload: {
      trends
    }
  }),
  addMedications: (medications) => ({
    type: actions.ADD_MEDICATIONS,
    payload: {
      medications
    }
  }),
  filterByName: (name) => ({
    type: actions.FILTER_BY_NAME,
    payload: {
      name
    }
  }),
  undo: () => ({
    type: actions.UNDO,
    payload: {}
  }),

  getCosts: (authToken, actualNode) => (dispatch)  => {
    const reqBody = {node: actualNode };
    const opts = { headers: { Authorization: authToken } };
    return api.post(ENDPOINTS.COST, reqBody, opts)
        .then((res) => {
          dispatch(actionCreators.addParts(res.data.claim_type));
          dispatch(actionCreators.addTrends(res.data.trends));
          dispatch(actionCreators.addMedications(res.data.medication));
        })
        .catch((err) => console.error(err.response.data));
  },
};

const defaultState = {
  parts: [],
  partsHistory: [],
  medications: [],
  medicationsHistory: [],
  trends: [],
  trendsHistory: [],
  watchingD: false,
  watchingDHistory: []
};

export default function (prevState = defaultState, action) {
  switch (action.type) {

    case actions.UNDO: {
      const previousParts = lodash.last(prevState.partsHistory);
      const previousTrends = lodash.last(prevState.trendsHistory);
      const previousWatchingD = lodash.last(prevState.watchingDHistory);

      if (prevState.partsHistory.length > 1)
        return {
          ...prevState,
          parts: previousParts,
          partsHistory: prevState.partsHistory.slice(0, -1),
          trends: previousTrends,
          trendsHistory: prevState.trendsHistory.slice(0 , -1),
          watchingD: previousWatchingD,
          watchingDHistory: prevState.watchingDHistory.slice(0, -1)
        };
      else
        return prevState;
    }

    case actions.ADD_PARTS:
      if (prevState.parts.length)
        return prevState;
      return {
        ...prevState,
        parts: lodash.concat(prevState.parts, action.payload.parts),
        partsHistory: lodash.concat(prevState.partsHistory, [prevState.parts])
      };

    case actions.ADD_MEDICATIONS:
      if (prevState.medications.length)
        return prevState;
      return {
        ...prevState,
        medications: lodash.concat(prevState.medications, action.payload.medications),
        medicationsHistory: lodash.concat(prevState.medicationsHistory, [prevState.medications])
      };
    case actions.ADD_TRENDS:
      if (prevState.trends.length)
        return prevState;
      return {
        ...prevState,
        trends: lodash.concat(prevState.trends, action.payload.trends),
        trendsHistory: lodash.concat(prevState.trendsHistory, [prevState.trends])
      };

    case actions.FILTER_BY_NAME: {
      const name = action.payload.name;
      return {
        ...prevState,
        parts: prevState.parts.filter((part) => part.name === name),
        partsHistory: lodash.concat(prevState.partsHistory, [prevState.parts]),
        trends: prevState.trends.map((trend) => {
          switch (name){
            case 'A':
              return {
                ...trend,
                costD: null,
                costB: null
              };
            case 'B':
              return {
                ...trend,
                costA: null,
                costD: null
              };
            case 'D':
              return {
               ...trend,
               costA: null,
               costB: null
              };
            default:
              return trend;
            }
        }),
        trendsHistory: lodash.concat(prevState.trendsHistory, [prevState.trends]),
        watchingD: name === 'D',
        watchingDHistory: lodash.concat(prevState.watchingDHistory, [prevState.watchingD])
      };
    }

    default: return prevState;
  }
}

export const NAME = 'cost';

