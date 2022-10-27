const PedidoService = require('../service/pedidoService')

class PedidoController {
    async fazerPedido(req, res) {
        try {
            const result = await PedidoService.fazerPedido(req.body)
            return res.status(201).json(result);
        } catch (error) {
            return res.status(error.status || 400).json(error.message);
        }
    }
    async encarregarUmEntregador(req, res){
        try {
            const result = await PedidoService.encarregarUmEntregador(req.body, req.params.idPedido)
            return res.status(201).json(result);
        } catch (error) {
            return res.status(error.status || 400).json(error.message);
        }
    }
    async verificarPedido(req, res){
        try{
            const result = await PedidoService.verificarPedido()
            return res.status(200).json(result);
        } catch (error) {
            return res.status(error.status || 400).json(error.message);
        }
    }
    async verificarPedidoDeUmCliente(req, res){
        try{
            const result = await PedidoService.verificarPedidoDeUmCliente(req.params.idCliente)
            return res.status(200).json(result);
        } catch (error) {
            return res.status(error.status || 400).json(error.message);
        }
    }
    async verificarPedidoDeUmEntregador(req, res){
        try{
            const result = await PedidoService.verificarPedidoDeUmEntregador(req.params.idEntregador)
            return res.status(200).json(result);
        } catch (error) {
            return res.status(error.status || 400).json(error.message);
        }
    }
    async atualizarStatusDoPedido(req, res){
        try{
            const result = await PedidoService.atualizarStatusDoPedido(req.params.id, req.body)
            return res.status(200).json(result);
        } catch (error) {
            return res.status(error.status || 400).json(error.message);
        } 
    }
}

module.exports = new PedidoController()