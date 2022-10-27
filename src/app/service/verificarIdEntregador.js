const EmployeeRepository = require('../repository/employeeRepository')
const NotFound = require('../errors/notFound');
const BadRequest = require('../errors/badRequest')

async function validarIdFuncionario(payload){
    const { entregadorId } = payload

    if(!entregadorId){
        throw new BadRequest("Insira um ID")
    }
    const result = await EmployeeRepository.consultarFuncionarioPorId(entregadorId);
    if (!result) {
        throw new NotFound(`id cliente`);
    }
    return payload.nomeDoEntregador = result.nome    
}

module.exports = validarIdFuncionario