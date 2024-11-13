// models/Cliente.js

const mongoose = require("mongoose");

// Definição do schema para clientes
const clienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    telefone: {
        type: String,
        required: true,
        trim: true,
    },
    endereco: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true, // Adiciona campos de data de criação e atualização automaticamente
});

// Criação do modelo Cliente baseado no schema
const Cliente = mongoose.model("Cliente", clienteSchema);

module.exports = Cliente;
