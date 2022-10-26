const badRequest = require('../errors/badRequest') 

async function verificarValorPago(valorTotal, valorPago){
    if(valorPago < valorTotal){
        throw new badRequest(`Pagamento não aprovado. Você deve pagar ${valorTotal}$`); 
    }
}

module.exports = verificarValorPago