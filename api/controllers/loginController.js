'use strict';

exports.login = function(context, req) {
  if (USER_USER == req.query.user && USER_PASSWORD == req.query.password) {
    // res.status(200);
    // res.json({'token':'5DE6E0C53BB8BB6CBB392526FA278D47'});
    context.res = {
      // body: {'token':'5DE6E0C53BB8BB6CBB392526FA278D47'},
      body: JSON.stringify({'token':'5DE6E0C53BB8BB6CBB392526FA278D47'}),
      headers: {
          'Content-Type': 'application/json'
      }
    };
    console.log('5DE6E0C53BB8BB6CBB392526FA278D47');
    context.done();    

  }else{
    // res.status(401);
    // res.json({'error':'invalid user and password'});
    context.res = {
      status: 401,
      body: JSON.stringify({'error':'invalid user and password'}),
      // body: {'error':'invalid user and password'},
      headers: {
          'Content-Type': 'application/json'
      }
    };
    console.log('invalid user and password');
    context.done();    
  }
};
