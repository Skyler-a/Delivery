const joi = require('joi');

const login = joi.object({
  email: joi.string().email().required(),
  senha: joi.string().min(6).required()
});

module.exports = login;