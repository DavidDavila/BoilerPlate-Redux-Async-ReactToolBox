import axios from 'axios';

const dataService = store => next => action => {
  /*
  Pass all actions through by default
  */
  next(action);

  switch (action.type) {

    case 'POST_LOGIN':
      axios
      .post('/api/client/Patch/validate', {
        'email' : 'test@test.com',
        'password' : '1234'
      })
      .then((response) => { 
        data = response.data;
        next({
          type: 'LOGIN_DATA_RECEIVED',
          data
        });  
      });
      break;
  /*
  Do nothing if the action does not interest us
  */
    default:
      break;
  };

};

export default dataService;
