const clienteSchema = require('../schema/clienteSchema');

class ClienteRepository {
  async createCliente(payload) {
    return clienteSchema.create(payload);
  }
  async findCliente(){
    return clienteSchema.find()
  }
  async findClienteById(payload){
    return clienteSchema.findById(payload)
  }
  async deleteCliente(payload){
    return clienteSchema.findByIdAndDelete(payload)
  }
  async updateCliente(id, body){
    return clienteSchema.findByIdAndUpdate(id, body)
  }
  async adicionarSaldo(id, payload){
    return clienteSchema.findByIdAndUpdate(id, payload)
  }
}
module.exports = new ClienteRepository();