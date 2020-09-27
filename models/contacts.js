const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 33,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required:true

  }
});

module.exports = mongoose.model('contacts', contactSchema);



