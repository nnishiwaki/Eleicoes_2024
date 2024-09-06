function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        // Cria um novo elemento HTML para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.candidato}</a>
                </h2>
                <p class="descricao-meta">Proposta: ${dado.proposta}</p>
                <p class="descricao-meta">Profissão: ${dado.profissao}</p>
                <p class="descricao-meta">Patrimônio: ${dado.patrimonio}</p>
                <p class="descricao-meta">Instrução: ${dado.instrucao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}