const ClienteRepository = require('../repository/clienteRepository');
const validarCliente = require('./verificarIdCliente')
const notFound = require('../errors/notFound')
const validarCpf = require('../utils/validateCpf')
const BadRequest = require('../errors/badRequest')
const getCep = require('./callCepApi')
const addSaldo = require('./adicionarSaldo')
const validarIdade = require('../utils/validarIdade')

class ClienteService {
  async createCliente(payload) {
    await validarIdade(payload.dataNascimento)
    const cpfValidation = await validarCpf(payload.cpf);
    if (cpfValidation === false) throw new BadRequest('Cpf invalido');
    const informations = await getCep(payload)
    const result = await ClienteRepository.createCliente(informations);
    return result;
  }
  async findCliente(payload){
    const result = await ClienteRepository.findCliente(payload)
    return result
  }
  async findClienteById(payload){
    const result = await ClienteRepository.findClienteById(payload);
    return result
  }
  async deleteCliente(payload){
    const result = await ClienteRepository.deleteCliente(payload);
    if (result == null) {
      throw new notFound('Id')
    }
    return result;
  }
  async updateCliente(id, body){
    const result = await ClienteRepository.updateCliente(id, body);
    if (result == null) {
      throw new notFound('Id')
    }
    const res = { message: 'Cliente atualizado com sucesso' };
    return res;
  }
  async adicionarSaldo(id, payload){
    await validarCliente(id)
    const novoSaldo = await addSaldo(id, payload)
    const result = await ClienteRepository.updateCliente(id, novoSaldo)
    return result
  }
}
module.exports = new ClienteService();