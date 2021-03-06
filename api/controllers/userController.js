'use strict';

exports.getUserList = function(req, res) {
  var auth = req.get('authentication');

  if(auth === USER_TOKEN){
    var userModel = require('../models/userModel');
    var usersList = userModel.getUsers();
    res.json(usersList);

  }else{
    res.status(401);
    res.send();
  }
};
