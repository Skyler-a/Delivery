const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema(
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
    dataNascimento: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    fidelidade: {
      type: String
    },
    telefone: {
      type: String
    },
    saldo: {
      type: Number
    },
    endereco: [
      {
        cep: {
          type: String,
          required: true
        },
        numero: {
          type: String,
          required: true
        },
        rua: {
          type: String
        },
        complemento: {
          type: String
        },
        bairro: {
          type: String
        },
        _id: false,
      }
    ],
  },
  {
    timestamps: false,
    versionKey: false
  }
);

const cliente = mongoose.model('cliente', clienteSchema);
module.exports = cliente;