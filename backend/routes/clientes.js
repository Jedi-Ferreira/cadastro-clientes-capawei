// routes/clientes.js

const express = require("express");
const router = express.Router();
const Cliente = require("../models/Cliente");

// Rota para cadastrar um cliente
router.post("/", async (req, res) => {
    try {
        const novoCliente = new Cliente(req.body);
        await novoCliente.save();
        res.status(201).json({ message: "Cliente cadastrado com sucesso!" });
    } catch (error) {
        res.status(400).json({ message: "Erro ao cadastrar cliente.", error });
    }
});

module.exports = router;
