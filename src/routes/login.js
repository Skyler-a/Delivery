const AuthController = require('../app/controllers/authController');
const validarLogin = require('../app/middleware/login/validarLogin')

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
  routes.post('/', validarLogin, AuthController.login);

  server.use(prefix, routes);
};