const ClienteRepository = require('../repository/clienteRepository')

async function adicionarPontosFidelidade(clienteId, litros){

    const getPoints = await ClienteRepository.findClienteById(clienteId)
    if(!getPoints.fidelidade){
        const pontos = {
            fidelidade: litros
        }
        await ClienteRepository.updateCliente(clienteId, pontos)
        return;
    }

    for (pontosDeFidelidade = 0; pontosDeFidelidade < litros; pontosDeFidelidade++){
        getPoints.fidelidade++
    }
    const pontos = {
        fidelidade: getPoints.fidelidade
    }
    await ClienteRepository.updateCliente(clienteId, pontos)
    return;
}

module.exports = adicionarPontosFidelidade