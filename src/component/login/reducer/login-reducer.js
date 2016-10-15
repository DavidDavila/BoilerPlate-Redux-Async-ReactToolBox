import { LOGIN, LOGIN_ERROR, LOGOUT } from '../action/login-action';

export default function loginReducer(state = null, action) {

  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, action.project);
      break;
    case  LOGIN_ERROR:
      return false;
      break;
    case  LOGOUT:
      return null;
      break;
    default:
      return state;
  };
}
