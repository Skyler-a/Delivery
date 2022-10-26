const regex = {
    cpf: /(\d{3}).(\d{3}).(\d{3})-(\d{2})$/,
    cep: /^\d{5}-\d{3}$/,
    id: /^[0-9a-fA-F]{24}$/,
    telefone: /^(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}[0-9]{4}$/
  };
  module.exports = regex;