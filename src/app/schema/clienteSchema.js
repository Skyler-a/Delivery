const mongoose = require('mongoose');
const bcript = require('bcryptjs');

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
    senha: {
      type: String,
      required: true
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

clienteSchema.pre('save', async function senha(next) {
  const hash = await bcript.hash(this.senha, 10);
  this.senha = hash;
  next();
});

const cliente = mongoose.model('cliente', clienteSchema);
module.exports = cliente;