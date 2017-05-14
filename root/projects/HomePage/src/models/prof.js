'user strict';

var mongoose = require('mongoose');

var profSchema = new mongoose.Schema({
  name: String,
  courses: String,
  url: String,
  person_id: String,
  face_id: String
});

var model = mongoose.model('prof', profSchema);

module.exports = model;
