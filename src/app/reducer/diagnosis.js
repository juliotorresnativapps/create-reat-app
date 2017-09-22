
import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
    status: '',
    list: []
};

export default (state = {...initialState}, action) => {
    switch(action.type) {
        case actionsTypes.fetchDiagnosis:
            return {...state, status: 'FETCH'};
        case actionsTypes.successDiagnosis:
            return {...state, status: 'SUCCESS'};
        case actionsTypes.setDiagnosis:
            return {...state, list: action.data};
        default:
            return state;
    }
};