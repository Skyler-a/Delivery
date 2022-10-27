const EmployeeRepository = require('../repository/employeeRepository')

class EmployeeService{
    async cadastrarFuncionario(payload){
        const result = EmployeeRepository.cadastrarFuncionario(payload)
        return result
    }
}

module.exports = new EmployeeService()