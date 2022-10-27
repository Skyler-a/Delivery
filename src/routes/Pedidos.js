const PedidosController = require('../app/controllers/pedidoController');
const validarIdEntregador = require('../app/middleware/id/validarIdEntregador')

module.exports = (server, routes, prefix = '/api/v1/pedidos') => {
  routes.post('/fazerPedido', PedidosController.fazerPedido);
  routes.get('/admin',  PedidosController.verificarPedido);
  routes.get('/cliente/:idCliente', PedidosController.verificarPedidoDeUmCliente);
  routes.get('/admin/:idEntregador', validarIdEntregador, PedidosController.verificarPedidoDeUmEntregador);
  routes.put('/admin/:idPedido', PedidosController.encarregarUmEntregador);
  routes.put('/admin/:id', PedidosController.atualizarStatusDoPedido);
  
  server.use(prefix, routes);
}; 