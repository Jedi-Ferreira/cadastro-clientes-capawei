// script.js

document.addEventListener("DOMContentLoaded", function () {
    const formCadastro = document.getElementById("formCadastro");
    const produtoForm = document.getElementById("produtoForm");
    const mensagem = document.getElementById("mensagem");

    // Função para exibir mensagem ao usuário
    function mostrarMensagem(texto, sucesso = true) {
        mensagem.textContent = texto;
        mensagem.style.color = sucesso ? "green" : "red";
    }

    // Enviar dados de cliente
    formCadastro.addEventListener("submit", async function (e) {
        e.preventDefault();
        const dadosCliente = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            telefone: document.getElementById("telefone").value,
            endereco: document.getElementById("endereco").value,
        };

        try {
            const response = await fetch("/api/clientes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dadosCliente),
            });

            const resultado = await response.json();
            if (response.ok) {
                mostrarMensagem("Cliente cadastrado com sucesso!");
                formCadastro.reset();
            } else {
                mostrarMensagem(resultado.message, false);
            }
        } catch (error) {
            mostrarMensagem("Erro ao cadastrar cliente.", false);
        }
    });

    // Enviar dados do produto
    produtoForm.addEventListener("submit", async function (e) {
        e.preventDefault();
        const dadosProduto = {
            produto: document.getElementById("produto").value,
            quantidade: document.getElementById("quantidade").value,
        };

        try {
            const response = await fetch("/api/produtos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dadosProduto),
            });

            const resultado = await response.json();
            if (response.ok) {
                mostrarMensagem("Produto cadastrado com sucesso!");
                produtoForm.reset();
            } else {
                mostrarMensagem(resultado.message, false);
            }
        } catch (error) {
            mostrarMensagem("Erro ao cadastrar produto.", false);
        }
    });
});
