import axios from 'axios';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function login(data) {
  return (dispatch, getState) => {
    axios.post('/api/login/', data)
    .then((response) => {
      dispatch( { type: LOGIN, project : response.data }, getState());

    })
    .catch(function (error) {
      dispatch( { type: LOGIN_ERROR }, getState());
    });
  };
};
export function logout(data) {
  return {
    type: LOGOUT
  };
}
