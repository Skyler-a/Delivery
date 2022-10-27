const PedidoRepository = require('../repository/pedidoRepository')
const verificarIdCliente = require('./verificarIdCliente')
const adicionarPontosFidelidade = require('./adicionarPontosFidelidade')
const calcularTroco = require('../utils/calcularTroco')
const calcularValorTotal = require('./calcularValorTotal')
const verificarValorPago = require('../utils/verificarValorPago')
const validarIdFuncionario = require('./verificarIdEntregador')
const notFound = require('../errors/notFound')

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
    async verificarPedido(){
        const result = await PedidoRepository.verificarPedido()
        return result
    }
    async encarregarUmEntregador(payload, idPedido){
        await validarIdFuncionario(payload)
        const result = await PedidoRepository.encarregarUmEntregador(payload, idPedido)
        return result
    }
    async verificarPedidoDeUmCliente(clienteId){
        const result = await PedidoRepository.verificarPedidoDeUmCliente(clienteId)
        if(result.length == 0){
            throw new notFound("pedido")
        }
        return result
    }
    async verificarPedidoDeUmEntregador(entregadorId){
        const result = await PedidoRepository.verificarPedidoDeUmEntregador(entregadorId)
        if(result.length == 0){
            throw new notFound("Pedido")
        }
        return result
    }
    async atualizarStatusDoPedido(id, payload){
        const result = await PedidoRepository.atualizarStatusDoPedido(id, payload)
        return result
    }
}

module.exports = new PedidoService()