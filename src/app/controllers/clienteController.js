const ClienteService = require('../service/clienteService');
const BadRequest = require('../errors/badRequest')

class ClienteController {
  async createCliente(req, res) {
    try {
      const result = await ClienteService.createCliente(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(error.status || 400).json(error.message);
    }
  }
  async findCliente(req, res){
    try{
        const result = await ClienteService.findCliente()
        return res.status(200).json(result)
    } catch(error) {
      return res.status(error.status || 400).json(error.message);
    }
  }
  async findClienteById(req, res){
    try{
      const result = await ClienteService.findClienteById(req.params.id)
      return res.status(200).json(result)
    } catch(error){
      return res.status(error.status || 400).json(error.message);
    }
  }
  async deleteCliente(req, res){
    try{
      const result = await ClienteService.deleteCliente(req.params.id)
      return res.status(204).json(result)
    } catch(error){
      if (error.kind === `ObjectId`) {
        return res.status(400).json(new BadRequest(`Seu ID não é válido`));
      }
      return res.status(error.status || 400).json(error.message);
    }
  }
  async updateCliente(req, res){
    try{
      const result = await ClienteService.updateCliente( req.params.id, req.body)
      return res.status(204).json(result)
    } catch(error){
      return res.status(error.status || 400).json(error.message);
    }
  }
  async adicionarSaldo(req, res){
    try{
      const result = await ClienteService.adicionarSaldo(req.params.id, req.body)
      return res.status(204).json(result)
    } catch(error){
      return res.status(error.status || 400).json(error.message);
    }
  }
}
module.exports = new ClienteController();