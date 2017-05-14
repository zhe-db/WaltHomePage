'use strict';

var express = require('express');
// Add model here
var Prof = require('../models/prof');

var router = express.Router();

router.get('/professors', function(req, res){
  //Get every UW prof here
  Prof.find({}, function(err, profs){
    if(err){
     return res.status(500).json({message: err.message});
   }
 res.json({'prof': profs});
 });
});


//professors: Put route to add urls to professor
router.put('/professrs/:id', function(req, res){
  var id = req.params.id;
  var prof = req.body;
  if(prof && prof._id !== id){
    return res.status(500).json({err: "Id doesn't match"});
  }
  Prof.findByIdAndUpdate(id, prof, {new: true}, function(err, prof){
    if(err){
      return res.status(500).json({err: "Ids don't match"});
    }
    res.json({'prof': prof, message:'Profile Upadated'})
  });
});
//professors: Add Post route to add professor
router.get('/professors/:id', function(req, res){
  var personID = req.params.id;
  Prof.find({personId: personID}, function(err, prof){
    if(err){
     return res.status(500).json({message: err.message});
   }
 res.json({'prof': prof});
  })
});


//professors: Add delete route to remove professors profiles

module.exports = router;
