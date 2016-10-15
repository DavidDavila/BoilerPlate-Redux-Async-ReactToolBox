import mongoose from 'mongoose';
import service from './../services/token';

var Login  = mongoose.model('LOGIN');

// POST - Insert a new Client in the DB
exports.addUser = function (req, res) {  
  console.log('POST');

  var user = new Login(req.body);
  user.save(function (err, userSaved) {
    if (err) {
      return res.send(err);

    };
    res.status(200).jsonp(userSaved);
  });
};

// POST - Validate a Contact with specified email Client
exports.validateUser = function (req, res) {

  Login.findOne( { 'email' : req.body.email }, function (err, user) {
    console.log('POST /validate');
    if (err) {
      return res.send(500, err.message);
    };
    console.log(user);
    if (user.password === req.body.password && user.email === req.body.email ) {
      var userData = {
        token : service.createToken(req.body.email),
        email :user.email,
      };
      return res.status(200).jsonp(userData);
    }
    return res.sendStatus(403);
    
  });
};
