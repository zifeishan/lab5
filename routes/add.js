var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
  // console.log("Hellow Woord!");
  
  // console.log(req.query);
  var newfriend = {
    name: req.query.name,
    description: req.query.description,
    imageURL: "http://lorempixel.com/400/400/people"
  }
  res.render('add', {
   friends: [newfriend]
  });
  console.log(newfriend);

  data["friends"].push(newfriend);
 }