
import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
    status: '',
    list: []
};

export default (state = {...initialState}, action) => {
    switch(action.type) {
        case actionsTypes.fetchPharmacies:
            return {...state, status: 'FETCH'};
        case actionsTypes.successPharmacies:
            return {...state, status: 'SUCCESS'};
        case actionsTypes.setPharmacies:
            return {...state, list: action.data};
        default:
            return state;
    }
};