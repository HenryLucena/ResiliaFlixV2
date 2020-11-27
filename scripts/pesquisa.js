let botao = document.getElementById('buscar')
botao.addEventListener('click', filmes)

async function filmes () {
    // limpando div
    // limpa div container caso haja uma anterior (busca anterior)
    let el = document.getElementById( 'container' );
    if (el != null) {
        el.parentNode.removeChild( el );
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
    let url = `http://www.omdbapi.com/?s=${pesquisa}&apikey=${key}`
    
    let resposta = await fetch(url)
        .then(res => {
            let req = res.json()
            return req
        })
        
        if (resposta.Response === 'False') {
            let container = document.getElementById('container')
            container.textContent = 'filme nao encontrado'
        }
        else if (resposta.Response === 'True') {
            let movies = resposta.Search // array retornado pela requisicao

            for (movie of movies) {
                let container = document.getElementById('container')
                
                let titulo = `<h1 class="titulo-filme">${movie.Title}</h1>`
                container.innerHTML += titulo

                let img = `<img src="${movie.Poster}" class="capa-filme">`
                container.innerHTML += img

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
                container.innerHTML += tipo 

                let ano = `<span class="ano-filme">${movie.Year}</span>`
                container.innerHTML += ano

            }
        }
        console.log(resposta.Search)
}
