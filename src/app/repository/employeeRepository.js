const employeeSchema = require('../schema/employeeSchema')

class EmployeeRepository{
    async cadastrarFuncionario(payload){
        return employeeSchema.create(payload)
    }
    async consultarFuncionario(){
        return employeeSchema.find()
    }
    async consultarFuncionarioPorId(id){
        return employeeSchema.findById(id)
    }
}

module.exports = new EmployeeRepository()