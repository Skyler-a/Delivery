const ClienteRepository = require('../repository/clienteRepository')
const NotFound = require('../errors/notFound');
const BadRequest = require('../errors/badRequest')

async function validarIdCliente(idCliente){
    if(!idCliente){
        throw new BadRequest("Insira um ID")
    }
    const result = await ClienteRepository.findClienteById(idCliente);
    if (!result) {
        throw new NotFound(`id cliente`);
    }
}

module.exports = validarIdCliente