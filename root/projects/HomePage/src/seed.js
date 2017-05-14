'use strict';

// Add model file here
var Prof = require('./models/prof.js');
// Add json file here

var profiles = require('../mock/prof_profiles.json');


var profs = profiles.data;
//console.log(typeof profs);
  profs.forEach(function(prof, index){
    Prof.find({'name':prof.name}, function(err, done){
        if(!err && !prof.length) {
          Prof.create({
            name: prof.name,
            url: prof.url[0],
            face_id: prof.face_id,
            person_id: prof.person_id
          });
        }
    });
  });
