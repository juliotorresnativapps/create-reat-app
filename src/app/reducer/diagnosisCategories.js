
import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
    status: '',
    list: []
};

export default (state = {...initialState}, action) => {
    switch(action.type) {
        case actionsTypes.fetchDiagnosisCategories:
            return {...state, status: 'FETCH'};
        case actionsTypes.successDiagnosisCategories:
            return {...state, status: 'SUCCESS'};
        case actionsTypes.setDiagnosisCategories:
            return {...state, list: action.data};
        default:
            return state;
    }
};