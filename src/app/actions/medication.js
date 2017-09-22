
import * as actionsTypes from './actionsTypes';
import API from '../root_url';

const secure = function(fn) {
    return typeof fn !== 'function' ? () => {}: fn;
};

export const statusFetch = () => ({
    type: actionsTypes.fetchMedications
});

export const statusSuccess = () => ({
    type: actionsTypes.successMedications
});

export const setMedications = (data) => ({
    type: actionsTypes.setMedications,
    data: data
});

const apiFetch = API + '/shared/medication';
export const fetch = (authToken, node) => (dispatch) => {
    const fetch = window.fetch;
    dispatch(statusFetch());
    const data = new FormData();
    data.set('node', node);
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
                dispatch(setMedications(result));
                secure(resolve)(result);
            })
            .catch((err) => {
                secure(reject)(err);
            });
    });
};