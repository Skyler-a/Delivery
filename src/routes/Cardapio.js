const CardapioController = require('../app/controllers/cardapioController');
const cardapioPostMiddleware = require('../app/middleware/cardapio/validCardapioPost')
const cardapioPutMiddleware = require('../app/middleware/cardapio/validCardapioPut')
const validarId = require('../app/middleware/id/validarId')

module.exports = (server, routes, prefix = '/api/v1/cardapio') => {
  routes.post('/cadastro', cardapioPostMiddleware, CardapioController.inserirProduto);
  routes.get('/', CardapioController.verProdutos)
  routes.put('/:id', cardapioPutMiddleware, validarId, CardapioController.atualizarProduto)
  routes.delete('/delete/:id', validarId, CardapioController.deletarUmProduto)
  server.use(prefix, routes);
}; 