
import * as actionsTypes from './actionsTypes';
import API from '../root_url';

const secure = function(fn) {
    return typeof fn !== 'function' ? () => {}: fn;
};

export const statusFetch = () => ({
    type: actionsTypes.fetchDiagnosisCategories
});

export const statusSuccess = () => ({
    type: actionsTypes.successDiagnosisCategories
});

export const setCategories = (data) => ({
    type: actionsTypes.setDiagnosisCategories,
    data: data
});

const apiFetch = API + '/shared/diagnosis_cat';
export const fetch = ({authToken}) => (dispatch) => {
    const fetch = window.fetch;
    dispatch(statusFetch());
    return new Promise((resolve, reject) => {
        fetch(apiFetch, {
            headers: {
                Authorization: authToken,
                credentials: 'include', 
                mode: 'cors',
            }
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