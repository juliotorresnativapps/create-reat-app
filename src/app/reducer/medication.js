
import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
    status: '',
    list: []
};

export default (state = {...initialState}, action) => {
    switch(action.type) {
        case actionsTypes.fetchMedications:
            return {...state, status: 'FETCH'};
        case actionsTypes.successMedications:
            return {...state, status: 'SUCCESS'};
        case actionsTypes.setMedications:
            return {...state, list: action.data};
        default:
            return state;
    }
};