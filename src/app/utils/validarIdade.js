const moment = require('moment');
const BadRequest = require('../errors/badRequest');

async function validarIdade(birthDay) {
  if (birthDay) {
    const formateBirthDay = moment(birthDay, 'DD/MM/YYYY').format('YYYY-MM-DD');
    const birthDayIsInvalid = moment().diff(formateBirthDay, 'years', false) < 16;
    const idadeInvalida = moment().diff(formateBirthDay, 'years', false) >= 100;

    if(idadeInvalida){
        throw new BadRequest(`Idade inválida`); 
    }
    if (birthDayIsInvalid) {
      throw new BadRequest(`Você precisa ter ao menos 16 anos para se cadastrar`);
    }
  }
}
module.exports = validarIdade;