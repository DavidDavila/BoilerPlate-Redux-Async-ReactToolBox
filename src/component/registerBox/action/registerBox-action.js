import axios from 'axios';
export const REGISTER = 'REGISTER';

export function register(data) {
  return (dispatch, getState) => {
    axios.post('/api/register/', data)
    .then((response) => {
      dispatch( { type: REGISTER, project : response.data }, getState());

    });
  };
};
