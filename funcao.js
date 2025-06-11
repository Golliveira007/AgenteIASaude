/* Função que faz a requisição com a nossa API */

/**
 * Função para enviar pergunta para a API de IA
 * @param {string} textoAnotacao - Texto da anotação a ser analisado
 * @returns {Promise<string>} Resposta da IA
 */
async function enviarPergunta(textoAnotacao) {
    try {
        const response = await fetch("http://localhost:3000/api/pergunta", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ pergunta: textoAnotacao })
        });

        const data = await response.json();
        return data.resposta || "Sem resposta da IA.";
    } catch (error) {
        console.error("Erro ao buscar resposta da IA:", error);
        return "Erro ao buscar resposta da IA.";
    }
}