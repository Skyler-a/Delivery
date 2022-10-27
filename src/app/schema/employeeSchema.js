const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true
    },
    cpf: {
      type: String,
      required: true,
      unique: true
    },
    salario:{
        type: Number
    },
    periodo: {
        type: String
    },
    cnh: {
        type: String
    },
    cargo: {
        type: String,
        enum: {
			values: ["Dono", "Entregador"]
		}
    }
},
  {
    timestamps: false,
    versionKey: false
  }
);

const employee = mongoose.model('employee', employeeSchema);
module.exports = employee;