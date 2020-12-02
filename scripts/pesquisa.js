let botao = document.getElementById('buscar')
botao.addEventListener('click', filmes)

let input = document.getElementById('tituloFilme')
input.addEventListener('keypress', function(e) {
    if(e.key == 'Enter' || e.keyCode == 13 || e.which == 13){
      filmes();
    }
  }, false);

async function filmes () {
    /* LIMPANDO DIV
    limpa div container caso haja uma anterior (busca anterior) */
    let el = document.getElementById('container')
    if (el != null) {
        el.parentNode.removeChild( el )
    }

    // cria novamente a div container
    let body = document.body
    let div = document.createElement('div')
    div.id = 'container'
    div.className = 'filmes'
    div.style = "color:white;"
    body.appendChild(div)
    
    // requisicao
    let pesquisa = document.getElementById('tituloFilme').value
    let key = 'df65174b'
    let url = `https://www.omdbapi.com/?s=${pesquisa}&apikey=${key}`
    
    
    let resposta = await fetch(url)
        .then(res => {
            let req = res.json()
            return req
        })
        
        if (resposta.Response === 'False') {
            
            let results = document.getElementById('results')
            let resultados = `<p class="erro-busca">Nenhum título com "${pesquisa}" foi encontrado.
                        <br>Por favor, tente novamente.
                        <br><small><em>Dica:</em> Pesquise o título em inglês</small></p>`
            results.innerHTML = resultados
        }

        else if (resposta.Response === 'True') {
            let container = document.getElementById('container')
            
            
            let movies = resposta.Search // array retornado pela requisicao
            
            for (movie of movies) {
                
                let results = document.getElementById('results')
                let resultados = `<p class="resultados">Foram encontrados ${resposta.totalResults} resultados para esta pesquisa.<br>Estes são os principais...</p>`
                results.innerHTML = resultados
                
                // cria div especifica para cada filme
                let movieContainer = document.createElement('div')
                movieContainer.className = 'filme-container'
                container.appendChild(movieContainer)
                
                let img = `<div class="capa">
                <img src="${movie.Poster}" alt="Capa do filme ${movie.Poster}" title="${movie.Poster}">
                </div>`
                movieContainer.innerHTML += img

                // div para infos
                let infoDiv = document.createElement('div')
                infoDiv.className = 'info-filme'
                movieContainer.appendChild(infoDiv)

                let titulo = `<h1 class="titulo-filme">${movie.Title}</h1>`
                infoDiv.innerHTML += titulo

                let tipoFilme = movie.Type
                if (tipoFilme == "game") {
                    tipoFilme = 'Jogo'
                } else if (tipoFilme == 'movie') {
                    tipoFilme = 'Filme'
                } else if (tipoFilme == 'series') {
                    tipoFilme = 'Série'
                } else {
                    tipoFilme = tipoFilme
                }

                let tipo = `<h2 class="tipo-filme">${tipoFilme}</h2>`
                infoDiv.innerHTML += tipo 

                let ano = `<span class="ano-filme">${movie.Year}</span>`
                infoDiv.innerHTML += ano
                
            }
        }

        console.log(resposta)
}
