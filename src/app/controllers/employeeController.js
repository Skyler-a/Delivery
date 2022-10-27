const EmployeeService = require('../service/employeeService')

class EmployeeController {
    async cadastrarFuncionario(req, res){
        try {
            const result = await EmployeeService.cadastrarFuncionario(req.body);
            return res.status(201).json(result);
          } catch (error) {
            return res.status(error.status || 400).json(error.message);
          }
    }
}

module.exports = new EmployeeController()