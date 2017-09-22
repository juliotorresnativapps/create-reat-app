
import * as actionsTypes from './actionsTypes';
import API from '../root_url';

const secure = function(fn) {
    return typeof fn !== 'function' ? () => {}: fn;
};

export const statusFetch = () => ({
    type: actionsTypes.fetchProcedures
});

export const statusSuccess = () => ({
    type: actionsTypes.successProcedures
});

export const setProcedures = (data) => ({
    type: actionsTypes.setProcedures,
    data: data
});

const apiFetch = API + '/shared/procedure';
export const fetch = ({authToken, category}) => (dispatch) => {
    const fetch = window.fetch;
    dispatch(statusFetch());
    const data = new FormData();
    data.set('procedure_cat', category);
    return new Promise((resolve, reject) => {
        fetch(apiFetch, {
            method: 'POST',
            headers: {
                Authorization: authToken,
                credentials: 'include', 
                mode: 'cors',
            },
            body: data
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(response.statusText);
            })
            .then((result) => {
                dispatch(statusSuccess());
                dispatch(setProcedures(result));
                secure(resolve)(result);
            })
            .catch((err) => {
                secure(reject)(err);
            });
    });
};