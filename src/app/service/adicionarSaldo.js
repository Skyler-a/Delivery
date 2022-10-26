const ClienteRepository = require('../repository/clienteRepository')

async function addSaldo (id, payload) {
    const { saldo } = payload
    const getCliente = await ClienteRepository.findClienteById(id)
    const getSaldo = getCliente.saldo
    if(!getCliente.saldo) return payload
    
    const novoSaldo = getSaldo + saldo
    const informations = {
        saldo: novoSaldo
    }

    return informations

} 
module.exports = addSaldo