const { Router } = require('express');
const cliente = require('./Cliente')
const pedidos = require('./Pedidos')
const cardapio = require('./Cardapio')

module.exports = (server) => {
  server.use((req, res, next) => {
    cliente(server, new Router());
    pedidos(server, new Router());
    cardapio(server, new Router());
    next();
  });
};