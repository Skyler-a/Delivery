const CardapioRepository = require('../repository/cardapioRepository')

class CardapioService {
    async inserirProduto (payload){
        const result = await CardapioRepository.inserirProduto(payload)
        return result
    }
    async verProdutos(){
        const result = await CardapioRepository.verProdutos()
        return result
    }
    async atualizarProduto(id, body){
        const result = await CardapioRepository.atualizarProduto(id, body)
        return result
    }
    async deletarUmProduto(id){
        const result = await CardapioRepository.deletarUmProduto(id)
        return result
    }
}

module.exports = new CardapioService()