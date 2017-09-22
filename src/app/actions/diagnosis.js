
import * as actionsTypes from './actionsTypes';
import API from '../root_url';

const secure = function(fn) {
    return typeof fn !== 'function' ? () => {}: fn;
};

export const statusFetch = () => ({
    type: actionsTypes.fetchDiagnosis
});

export const statusSuccess = () => ({
    type: actionsTypes.successDiagnosis
});

export const setDiagnosis = (data) => ({
    type: actionsTypes.setDiagnosis,
    data: data
});

const apiFetch = API + '/shared/diagnosis';
export const fetch = ({authToken, category}) => (dispatch) => {
    const fetch = window.fetch;
    dispatch(statusFetch());
    const data = new FormData();
    data.set('diagnosis_cat', category);
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
                dispatch(setDiagnosis(result));
                secure(resolve)(result);
            })
            .catch((err) => {
                secure(reject)(err);
            });
    });
};