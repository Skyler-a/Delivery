const { Router } = require('express');
const cliente = require('./Cliente')
const pedidos = require('./Pedidos')
const cardapio = require('./Cardapio')
const login = require('./login')
const employee = require('./Employee')

module.exports = (server) => {
  server.use((req, res, next) => {
    cliente(server, new Router());
    pedidos(server, new Router());
    cardapio(server, new Router());
    login(server, new Router());
    employee(server, new Router());
    next();
  });
};