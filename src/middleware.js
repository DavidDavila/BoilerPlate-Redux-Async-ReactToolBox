import jwt from 'jwt-simple';
import moment from 'moment';
import config from './config';

exports.ensureAuthenticated = function (req, res, next) { 
  if (!req.headers.authorization) {
    return res
    .status(403)
    .send({ message: 'Error' });
  };

  var token = req.headers.authorization.split(' ')[1];
  var payload = jwt.decode(token, config.TOKEN_SECRET);

  if (payload.exp <= moment().unix()) {
    return res
    .status(401)
    .send({ message: 'The token expires' });
  };

  req.user = payload.sub;
  next();
};
