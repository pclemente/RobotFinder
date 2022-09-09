var loginRoutes = require('../api/routes/loginRoutes');

module.exports = async function (context, req) {
    try {
        loginRoutes(context, req);
    } catch(error) {
      const err = JSON.stringify(error);
      context.res = {
        status: 500,
        body: `Request error. ${err}`
      };
    }
  };
