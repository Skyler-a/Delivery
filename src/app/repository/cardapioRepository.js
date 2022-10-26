const cardapioSchema = require('../schema/cardapioSchema')

class cardapioRepository{
    async inserirProduto(payload){
        return cardapioSchema.create(payload)
    }
    async verProdutos(){
        return cardapioSchema.find()
    }
    async verProdutosPorId(id){
        return cardapioSchema.findById(id)
    }
}

module.exports = new cardapioRepository()