const mongoose = require('mongoose');

const cardapioSchema = new mongoose.Schema(
  {
    nome: {
        type: String,
        required: true
    },
    valorProduto: {
        type: Number,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
},
{
    timestamps: false,
    versionKey: false
  })

const cardapio = mongoose.model('cardapio', cardapioSchema);
module.exports = cardapio;