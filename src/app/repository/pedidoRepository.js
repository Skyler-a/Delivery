const pedidoSchema = require('../schema/pedidoSchema');

class PedidoRepository{
    async fazerPedido(payload){
        return pedidoSchema.create(payload)
    }
    async verificarPedido(){
        return pedidoSchema.find()
    }
    async encarregarUmEntregador(payload, idPedido){
        return pedidoSchema.findByIdAndUpdate(idPedido, payload)
    }
    async verificarPedidoDeUmCliente(clienteId){
        return pedidoSchema.find({clienteId: clienteId})
    }
    async verificarPedidoDeUmEntregador(entregadorId){
        return pedidoSchema.find({entregadorId: entregadorId})
    }
    async atualizarStatusDoPedido(id, payload){
        return pedidoSchema.findByIdAndUpdate(id, payload)
    }
}

module.exports = new PedidoRepository()