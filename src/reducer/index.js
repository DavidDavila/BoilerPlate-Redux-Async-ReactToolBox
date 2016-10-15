import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import loginReducer from 'component/login/reducer/login-reducer';

export default combineReducers({
  loginReducer,

  routing: routeReducer
});
