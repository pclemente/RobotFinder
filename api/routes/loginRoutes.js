'use strict';

var loginController = require('../controllers/loginController');

module.exports = function(context, req) {
  app.route('/login')
    .post(loginController.login);
};
