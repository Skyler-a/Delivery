const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema(
  {
    clienteId: {
        type: mongoose.Schema.Types.ObjectId,
		ref: "cliente",
		required: true
    },
    entregadorId: {
        type: mongoose.Schema.Types.ObjectId,
		ref: "employee",
    },
    nomeDoEntregador: {
        type: String
    },
    produtos: [{
        produtoId:{
            type: mongoose.Schema.Types.ObjectId,
		    ref: "cardapio",
		    required: true
        },
        nomeDoProduto: {
            type: String
        },
        numeroDeItens: {
            type: Number,
            required: true
        },
        _id: false
    }],
    valorTotal: {
        type: Number,
        required: true
    },
    valorPago: {
        type: Number,
        required: true
    },
    taxaDeEntrega: {
        type: Number,
        required: true
    },
    litros: {
        type: Number,
        required: true
    },
    formaDePagamento: {
        type: String,
        required: true,
        enum: {
			values: ["Pix", "Dinheiro","Cartão", "Saldo em conta"],
			message: "Escolha um meio de pagamento válido"
		}
    },
    troco: {
        type: Number
    },
    situacao: {
        type: String,
        required: true,
        enum: {
            values: ["Pedido aceito", "Pedido a caminho", "Pedido entregue", "Cancelado"]
        }
    }
}, 
{
    timestamps: false,
    versionKey: false
  }
)

const pedido = mongoose.model('pedido', pedidoSchema);
module.exports = pedido;