const joi = require('joi').extend(require('@joi/date'));
const { cpf, cep, telefone } = require('../utils/regex');

const clientePost = joi.object({
  nome: joi.string().min(4).required(),
  cpf: joi.string().min(11).max(14).regex(cpf).message('Formato de CPF invalido. Tente: 000.000.000-00').required(),
  dataNascimento: joi.date().format('DD/MM/YYYY').required(),
  email: joi.string().email().required(),
  telefone: joi.string().regex(telefone).message("Formto inválido. Tente (00) 000000000").required(),
  endereco: joi.object({
      cep: joi.string().regex(cep).message('Formato inválido. Tente: 00000-000').required(),
      numero: joi.string().required(),
    })
    .required()
});

const clientePut = joi.object({
  nome: joi.string().min(4),
  cpf: joi.string().min(11).max(14).regex(cpf).message('Formato de CPF invalido. Tente: 000.000.000-00'),
  dataNascimento: joi.date().format('DD/MM/YYYY'),
  email: joi.string().email(),
  telefone: joi.string().regex(telefone).message("Formto inválido. Tente (00) 000000000"),
  endereco: joi
    .object({
      cep: joi.string().regex(cep).message('Invalid cep format. Try: 00000-000'),
      numero: joi.string()
    })
});

const clienteGet = joi.object({
  nome: joi.string(),
  cpf: joi.string(),
  dataNascimento: joi.date().format('DD/MM/YYYY'),
  email: joi.string().email(),
});

const clienteAddSaldo = joi.object({
  saldo: joi.number().required()
})

module.exports = { clientePost, clientePut, clienteGet, clienteAddSaldo };