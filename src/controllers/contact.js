var mongoose = require('mongoose');
var Contact  = mongoose.model('CONTACT');

// GET - Return all Users in the DB
exports.getContact = function (req, res) {  
  Contact.find(function (err, contact) {
    if (err) {
      res.send(500, err.message);
    };
    console.log('GET /contact');
    res.status(200).jsonp(contact);
  });
};
// PUT - Update a register already exists
exports.updateContact = function (req, res) {  
  Contact.findOne({ 'token': 'secret' }, function (err, contact) {
    if (err) {
      return res.status(500).send(errSave.message);
    };
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    contact.street = req.body.street;
    contact.twitter = req.body.twitter;
    contact.facebook = req.body.facebook;
    contact.map = req.body.map;
   
    contact.save(function (errSave) {
      if (errSave) {
        return res.status(500).send(errSave.message);
      };
      res.status(200).jsonp(contact);
    });
  });
};


// Insert default ContactForm
Contact.findOne({ 'token': 'secret' }, function (err, info) {
  if (!info) {

    var contact = new Contact({
      token : 'secret',
      email : 'hola@hermanosclever.com',
      phone : '915 457 959',
      street : 'Calle Mejía Lequerica 12, 1º ext. dcha.28004, Madrid.',
      twitter : 'https://twitter.com/hermanosclever',
      facebook : 'String',
      map : 'https://daks2k3a4ib2z.cloudfront.net/56ab386e6204e5ff5f8b0e2e/570df85ba6123f7a3b4a5c6e_mapa_contacto_HC3.png'
    });
    if (err) {
      console.log('contact not Inserted');
    };
    contact.save(function (errS, contactRes) {
      if (errS) {
        console.log('contact not Inserted');
      };
    });
  }
  
});

