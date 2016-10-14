import mongoose from 'mongoose';
import service from './../services/token';

var Client  = mongoose.model('CLIENT');

// GET - Return all Clients in the DB
exports.findAllClients = function (req, res) {  
  Client.find(function (err, clients) {
    if (err) {
      return res.send(404);

    };
    console.log('GET /clients');
    console.log(clients);
    res.status(200).jsonp(clients);
  });
};

// GET - Return a Client with specified NAME
exports.findByName = function (req, res) {  
  Client.findOne({ 'name' : req.params.id }, function (err, client) {
    if (err) {
      return res.send(404, err);

    };
    console.log('GET /client/' + req.params.id);
    res.status(200).jsonp(client);
  });
};

// POST - Insert a new Client in the DB
exports.addClient = function (req, res) {  
  console.log('POST');

  var client = new Client(req.body);
  console.log(client);
  client.save(function (err, clientSaved) {
    if (err) {
      return res.send(err);

    };
    res.status(200).jsonp(clientSaved);
  });
};

// PUT - Update a register already exists
exports.updateClient = function (req, res) {  
  Client.findOne({ 'name' : req.params.id }, function (err, client) {
    if (err) {
      return res.send(404);

    };
    client.name = req.body.name;
    client.projects = req.body.projects;
    client.contacts = req.body.contacts;
    client.milestones = req.body.milestones;
    client.save(function (errSave) {
      if (errSave) {
        return res.send(404);

      };
      res.status(200).jsonp(client);
    });
  });
};

// DELETE - Delete a Client with specified ID
exports.deleteClient = function (req, res) {  
  Client.findById(req.params.id, function (err, client) {
    if (err) {
      return res.send(404);
    };
    client.remove(function (errRemove) {
      if (errRemove) {
        return res.send(404);
      };
      res.status(200).send();
    });
  });
};

// POST - Validate a Contact with specified email Client
exports.validateClient = function (req, res) {  
  Client.findOne( { 'name' : req.params.id }, function (err, client) {
    if (err) {
      return res.send(500, err.message);
    };
    var userData = {};
    userData.thisProject = [];
    client.projects.map((project)=>{
      project.contacts.map((contact)=>{
        if (contact.password === req.body.password && contact.email === req.body.email ) {
          userData.thisProject.push(project);
          userData.thisContact = contact;
          
        }
      });
    });
    console.log('POST ' + req.params.id + '/validate');
    if (!userData.thisContact) {
      return res.sendStatus(403);
    }else {
      userData.token = service.createToken(req.body.email);
      return res.status(200).jsonp(userData);
    }
  });
};
