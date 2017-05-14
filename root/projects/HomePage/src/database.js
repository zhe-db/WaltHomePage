'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/findprof', function(err){
  if(err) {
    console.log('Failed connected to MongoDB!');
  } else {
    console.log('Successfully connected to MongoDB');
  }
});
