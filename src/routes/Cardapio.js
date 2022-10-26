const CardapioController = require('../app/controllers/cardapioController');


module.exports = (server, routes, prefix = '/api/v1/cardapio') => {
  routes.post('/cadastro', CardapioController.inserirProduto);
  routes.get('/', CardapioController.verProdutos)
  server.use(prefix, routes);
}; 