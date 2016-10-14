var mongoose = require('mongoose');
var User  = mongoose.model('USER');

// GET - Return all Users in the DB
exports.findAllUsers = function (req, res) {  
  User.find(function (err, users) {
    if (err) {
      res.send(500, err.message);
    };
    console.log('GET /users');
    res.status(200).jsonp(users);
  });
};

// POST - Insert a new User in the DB
exports.addUser = function (req, res) {  
  console.log('POST');
  console.log(req.body);

  var user = new User(req.body);

  user.save(function (err, userSaved) {
    if (err) {
      return res.status(500).send( err.message);
    };
    res.status(200).jsonp(userSaved._id);
  });
};

// PUT - Update a register already exists
exports.updateUser = function (req, res) {  
  User.findById(req.params.id, function (err, user) {
    if (err) {
      return res.status(500).send(errSave.message);
    };
    user.name = req.body.name;
    user.projects = req.body.projects;
    user.contacts = req.body.contacts;
    user.milestones = req.body.milestones;
    user.save(function (errSave) {
      if (errSave) {
        return res.status(500).send(errSave.message);
      };
      res.status(200).jsonp(user);
    });
  });
};

// DELETE - Delete a user with specified ID
exports.deleteUser = function (req, res) {  
  User.findById(req.params.id, function (err, user) {
    if (err) {
      return res.status(500).send(errSave.message);
    };
    User.remove(function (errRemove) {
      if (errRemove) {
        return res.status(500).send(errRemove.message);
      };
      res.status(200).send();
    });
  });
};
