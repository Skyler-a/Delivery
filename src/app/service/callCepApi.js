const axios = require('axios');
const NotFound = require('../errors/notFound');

async function getCep(payload) {
  const informations = [];
  const { endereco } = payload;
  const { data } = await axios(`https://viacep.com.br/ws/${endereco.cep}/json`);
  if (data.erro) {
    throw new NotFound('CEP');
  }
  informations.push({
    cep: data.cep,
    rua: data.logradouro,
    bairro: data.bairro,
    complemento: endereco.complemento,
    numero: endereco.numero
  });
  return { ...payload, endereco: informations };
}

module.exports = getCep;