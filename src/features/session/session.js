import api from '../../app/api';
// import api from './mockApi';
import { ENDPOINTS } from './endpoints';
//import { authenticatedAdmin, authenticatedUser } from '../../../../../../test/unit/features/sessions/fixtures';

export const actions = {
  ATTEMPT_LOGIN: 'ATTEMPT_LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOG_OUT: 'LOG_OUT'
};

export const actionCreators = {
  attemptLogin: () => ({
    type: actions.ATTEMPT_LOGIN
  }),

  loginSucceeded: (userInfo) => ({
    type: actions.LOGIN_SUCCESS,
    payload: userInfo
  }),

  loginFailed: (errorInfo) => ({
    type: actions.LOGIN_FAILURE,
    payload: errorInfo
  }),

  login: (email, password) => (dispatch) => {
    dispatch(actionCreators.attemptLogin());

    const reqBody = { email, password };

    return api.post(ENDPOINTS.LOGIN, reqBody)
      .then((res) =>
        dispatch(actionCreators.loginSucceeded(res.data))
      ).catch((err) =>
        dispatch(actionCreators.loginFailed(err.response.data))
      );
  }
};

const defaultState = {
  'auth_token': undefined,
  user: {},
  loginError: undefined,
  loggingIn: false
};

export default function (prevState = defaultState, action) {
  switch (action.type) {
    case actions.ATTEMPT_LOGIN:
      return {
        ...prevState,
        loggingIn: true
      };

      case actions.LOGIN_SUCCESS:
        return {
          'auth_token': action.payload.auth_token,
          user: action.payload.user,
          loginError: undefined,
          loggingIn: false
        };

    case actions.LOGIN_FAILURE:
      return {
        ...prevState,
        loginError: action.payload.message,
        loggingIn: false
      };

    case actions.LOG_OUT:
      return defaultState;

    default: return prevState;
  }
}

export const NAME = 'session';
