
import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
    status: '',
    list: []
};

export default (state = {...initialState}, action) => {
    switch(action.type) {
        case actionsTypes.fetchProcedures:
            return {...state, status: 'FETCH'};
        case actionsTypes.successProcedures:
            return {...state, status: 'SUCCESS'};
        case actionsTypes.setProcedures:
            return {...state, list: action.data};
        default:
            return state;
    }
};