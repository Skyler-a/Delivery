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
    async verificarPedido(req, res){
        try{
            const result = await PedidoService.verificarPedido(req.params.id)
            return res.status(200).json(result);
        } catch (error) {
            return res.status(error.status || 400).json(error.message);
        }
    }
}

module.exports = new PedidoController()