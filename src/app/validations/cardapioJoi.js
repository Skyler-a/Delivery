const joi = require('joi').extend(require('@joi/date'));

const cardapioPost = joi.object({
  nome: joi.string().min(4).required(),
  descricao: joi.string().required(),
  valor: joi.number().required()
});

const cardapioPut = joi.object({
    nome: joi.string().min(4),
    descricao: joi.string(),
    valor: joi.number()
});

module.exports = { cardapioPost, cardapioPut };