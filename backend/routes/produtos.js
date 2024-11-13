// routes/produtos.js

const express = require("express");
const router = express.Router();
const Produto = require("../models/Produto");

// Rota para cadastrar um produto
router.post("/", async (req, res) => {
    try {
        const novoProduto = new Produto(req.body);
        await novoProduto.save();
        res.status(201).json({ message: "Produto cadastrado com sucesso!" });
    } catch (error) {
        res.status(400).json({ message: "Erro ao cadastrar produto.", error });
    }
});

module.exports = router;
