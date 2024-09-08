/**
 * Função responsável por realizar uma pesquisa e exibir os resultados na página.
 *
 * Esta função busca um elemento HTML com o ID "resultados-pesquisa" e o utiliza para
 * inserir os resultados da pesquisa. Os dados da pesquisa são iterados e formatados como
 * HTML, sendo então adicionados ao elemento HTML mencionado.
 */
function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  

    let campoPesquisa = document.getElementById("campo-pesquisa") .value

    if (campoPesquisa == "")  {
         
        section.innerHTML = "<p> Nada foi encontrado"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da pesquisa
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
            </div>
            `;

        }
      // Cria uma string de HTML para representar um item de resultado
      
    }
  
    if (!resultados) {
         resultados = "<p>Nada foi encontrado</p>"

    }
    // Insere os resultados formatados na seção HTML
    section.innerHTML = resultados;
  }