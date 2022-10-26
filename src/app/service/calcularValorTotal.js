const CardapioRepository = require('../repository/cardapioRepository')

async function calcularValorTotal(payload){
    
    for(const pedido of payload.produtos){    
        const getItem = await CardapioRepository.verProdutosPorId(pedido.produtoId)
        const getPreco = getItem.valorProduto
        getTaxaDeEntrega = payload.taxaDeEntrega

        const numeroDeItens = pedido.numeroDeItens
        return payload.valorTotal = (getPreco*numeroDeItens)+getTaxaDeEntrega
        
    }

}

module.exports = calcularValorTotal