const PedidoRepository = require('../repository/pedidoRepository')
const verificarIdCliente = require('./verificarIdCliente')
const adicionarPontosFidelidade = require('./adicionarPontosFidelidade')
const calcularTroco = require('../utils/calcularTroco')
const calcularValorTotal = require('./calcularValorTotal')
const verificarValorPago = require('../utils/verificarValorPago')

class PedidoService{
    async fazerPedido(payload){
        await verificarIdCliente(payload.clienteId)
        await calcularValorTotal(payload)
        await verificarValorPago(payload.valorTotal, payload.valorPago)
        await calcularTroco(payload)
        payload.situacao = "Pedido aceito"
        const result = await PedidoRepository.fazerPedido(payload)
        await adicionarPontosFidelidade(payload.clienteId, payload.litros)
        return result
    }
    async verificarPedido(clienteId){
        await verificarIdCliente(clienteId)
        const result = await PedidoRepository.verificarPedido(clienteId)
        return result
    }
}

module.exports = new PedidoService()