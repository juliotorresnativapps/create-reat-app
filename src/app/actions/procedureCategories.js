
import * as actionsTypes from './actionsTypes';
import API from '../root_url';

const secure = function(fn) {
    return typeof fn !== 'function' ? () => {}: fn;
};

export const statusFetch = () => ({
    type: actionsTypes.fetchProceduresCategories
});

export const statusSuccess = () => ({
    type: actionsTypes.successProceduresCategories
});

export const setCategories = (data) => ({
    type: actionsTypes.setProceduresCategories,
    data: data
});

const apiFetch = API + '/shared/procedure_cat';
export const fetch = ({authToken, node}) => (dispatch) => {
    const fetch = window.fetch;
    dispatch(statusFetch());
    return new Promise((resolve, reject) => {
        const data = new FormData();
        data.set('node', node);
        fetch(apiFetch, {
            headers: {
                Authorization: authToken,
                credentials: 'include', 
                mode: 'cors',
            },
            method: 'POST',
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
                dispatch(setCategories(result));
                secure(resolve)(result);
            })
            .catch((err) => {
                secure(reject)(err);
            });
    });
};