'use strict';

exports.login = function(req, res) {
  if (USER_USER == req.body.user && USER_PASSWORD == req.body.password) {
    // res.status(200);
    // res.json({'token':'5DE6E0C53BB8BB6CBB392526FA278D47'});
    context.res = {
      status: 200,
      body: `{'token':'5DE6E0C53BB8BB6CBB392526FA278D47'}`
    };
    context.done();    

  }else{
    // res.status(401);
    // res.json({'error':'invalid user and password'});
    context.res = {
      status: 401,
      body: `{'error':'invalid user and password'}`
    };
    context.done();    
  }
};
