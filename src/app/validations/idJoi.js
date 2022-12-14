const joi = require('joi');
const { id } = require('../utils/regex');

const validarId = joi.object({
  id: joi.string().regex(id).message('Your Id was out-standard').required()
});

const validarIdPedido = joi.object({
  id: joi.string().regex(id).message('Your Id was out-standard').required(),
  id_pedido: joi.string().regex(id).message('Your Id was out-standard')
});

const validarIdEntregador = joi.object({
  idEntregador: joi.string().regex(id).message('Your Id was out-standard').required()
});

module.exports = { validarId, validarIdPedido, validarIdEntregador };