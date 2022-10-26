const ClienteController = require('../app/controllers/clienteController');
const ClientePostMiddleware = require('../app/middleware/cliente/validClientePost')
const validarId = require('../app/middleware/id/validarId')
const ClienteUpdateMiddleware = require('../app/middleware/cliente/validClienteUpdate')
const ClienteSaldoMiddleware = require('../app/middleware/cliente/validClienteSaldo')

module.exports = (server, routes, prefix = '/api/v1/cliente') => {
  routes.post('/cadastro', ClientePostMiddleware, ClienteController.createCliente);
  routes.post('/:id/adicionar-saldo', ClienteSaldoMiddleware, validarId, ClienteController.adicionarSaldo)
  routes.get('/', ClienteController.findCliente);
  routes.get('/:id', validarId, ClienteController.findClienteById)
  routes.put('/:id',  ClienteUpdateMiddleware, validarId, ClienteController.updateCliente);
  routes.delete('/:id', validarId, ClienteController.deleteCliente);
  server.use(prefix, routes);
}; 