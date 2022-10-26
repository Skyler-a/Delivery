async function calcularTroco(payload){
    const { valorTotal, valorPago } = payload
    payload.troco = valorPago - valorTotal
    return payload.troco
}

module.exports = calcularTroco