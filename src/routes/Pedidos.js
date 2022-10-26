const PedidosController = require('../app/controllers/pedidoController');
const validarId = require('../app/middleware/id/validarId')

module.exports = (server, routes, prefix = '/api/v1/pedidos') => {
  routes.post('/fazerPedido', PedidosController.fazerPedido);
  routes.get('/:id', validarId, PedidosController.verificarPedido);
  server.use(prefix, routes);
}; 