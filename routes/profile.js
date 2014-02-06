'use strict';

// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
  var name = req.query.name;

  var person = {}

  for (var i = 0; i < data.friends.length; i++) {
    if (data.friends[i].name === name){
      person = data.friends[i];
      break;
    }
  }

  console.log(person.friends);
  // console.log(req);
  res.render('profile', person);

}

/*
// exports.addFriendProfile = function(req, res) {    
//   var newfriend = {
//     name: req.query.name,
//     imageURL: "http://lorempixel.com/400/400/people"
//   }
//   res.render('add', {
//    friends: [newfriend]
//   });
//   console.log(newfriend);

//   // console.log(req.originalUrl);

//   var myname = req.query.myname;

//   data["friends"][myname]["friends"].push(newfriend);

//   if (data["friends"][myname] == undefined)
//     return false;

//   if (data["friends"][myname]["friends"] == undefined)
//     data["friends"][myname]["friends"] = [];

//   console.log(data["friends"][myname]);

//   var person = {}

//   for (var i = 0; i < data.friends.length; i++) {
//     if (data.friends[i].name === myname){
//       person = data.friends[i];
//       break;
//     }
//   }
//   console.log(person);

//   res.render('profile', person);

//  }
*/