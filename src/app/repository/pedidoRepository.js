const pedidoSchema = require('../schema/pedidoSchema');

class PedidoRepository{
    async fazerPedido(payload){
        return pedidoSchema.create(payload)
    }
    async verificarPedido(clienteId){
        return pedidoSchema.find({clienteId: clienteId})
    }
}

module.exports = new PedidoRepository()