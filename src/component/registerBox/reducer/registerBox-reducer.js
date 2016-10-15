import { REGISTER } from '../action/registerBox-action';

export default function registerBoxReducer(state = null, action) {

  switch (action.type) {
    case REGISTER:
      return Object.assign({}, state, action.project);
      break;
    default:
      return state;
  };
}
