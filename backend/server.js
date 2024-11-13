// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const clientesRoutes = require("./routes/clientes");
const produtosRoutes = require("./routes/produtos");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect("mongodb://localhost:27017/cadastro", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Conectado ao MongoDB"))
.catch((error) => console.log(error));

// Rotas
app.use("/api/clientes", clientesRoutes);
app.use("/api/produtos", produtosRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
