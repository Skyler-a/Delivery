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
}

module.exports = new CardapioService()