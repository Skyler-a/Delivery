const CardapioService = require('../service/cardapioService')

class CardapioController {
    async inserirProduto (req, res){
        try{
            const result = await CardapioService.inserirProduto(req.body)
            return res.status(201).json(result);
        }catch (error) {
            return res.status(error.status || 400).json(error.message);
        }
    }
    async verProdutos(req, res){
        try{
            const result = await CardapioService.verProdutos()
            return res.status(201).json(result);
        }catch (error) {
            return res.status(error.status || 400).json(error.message);
        }
    }
    async atualizarProduto(req, res){
        try{
            const result = await CardapioService.atualizarProduto(req.params.id, req.body)
            return res.status(201).json(result);
        }catch (error) {
            return res.status(error.status || 400).json(error.message);
        }
    }
    async deletarUmProduto(req, res){
        try{
            const result = await CardapioService.deletarUmProduto(req.params.id)
            return res.status(201).json(result);
        }catch (error) {
            return res.status(error.status || 400).json(error.message);
        }
    }
}

module.exports = new CardapioController()