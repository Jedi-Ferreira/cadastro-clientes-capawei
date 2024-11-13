// models/Produto.js

const mongoose = require("mongoose");

// Definição do schema para produtos
const produtoSchema = new mongoose.Schema({
    produto: {
        type: String,
        required: true,
        trim: true,
    },
    quantidade: {
        type: Number,
        required: true,
        min: 1,
    },
}, {
    timestamps: true, // Adiciona campos de data de criação e atualização automaticamente
});

// Criação do modelo Produto baseado no schema
const Produto = mongoose.model("Produto", produtoSchema);

module.exports = Produto;
