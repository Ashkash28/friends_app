var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = (function() {
  return {
    show: function(req, res) {
      Friend.find({}, function(err, results) {
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
      })
    },
    add: function(req, res){
     var new_friend = new Friend({name: req.body.name, age: req.body.age});
     new_friend.save(function(err, response)
     {
     	if(err)
     	{
     		console.log("friend was not created in db");
     	}
     	else{
     		console.log('friend was added', response);
     		res.json(response);
     	}
     })
     
    }
  }
})();