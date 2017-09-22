
import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
    status: '',
    list: []
};

export default (state = {...initialState}, action) => {
    switch(action.type) {
        case actionsTypes.fetchProceduresCategories:
            return {...state, status: 'FETCH'};
        case actionsTypes.successProceduresCategories:
            return {...state, status: 'SUCCESS'};
        case actionsTypes.setProceduresCategories:
            return {...state, list: action.data};
        default:
            return state;
    }
};