const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MentorSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    maxlength:50
  },
  studentsId: {
    type: Schema.Types.ObjectId,
    ref: 'Students',
    required: true
  }

});

module.exports = mongoose.model('MentorTask', MentorSchema);



