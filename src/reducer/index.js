import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import loginReducer from 'component/login/reducer/login-reducer';
import registerBoxReducer from 'component/registerBox/reducer/registerBox-reducer';

export default combineReducers({
  loginReducer,
  registerBoxReducer,

  routing: routeReducer
});
