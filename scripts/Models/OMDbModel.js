class OMDbModel {

    constructor() {
        this._titulo = '';
        this._dataLancamento = '';
        this._duracao = '';
        this._genero = '';
        this._diretor = '';
        this._atores = '';
        this._enredo = '';
        this._img = '';
    }

    buscaDados(pesquisa) {
        let request = new XMLHttpRequest

        request.addEventListener('load', () => {
            let dados = JSON.parse(request.responseText)

            this._atualiza(dados)
                this._atualiza(dados)            
            this._atualiza(dados)

        })

        request.open('GET', `http://www.omdbapi.com/?t=${pesquisa}&plot=full&apikey=a0581d9a`, false)

        request.send()
    }

    _atualiza(teste) {
        this._titulo = teste.Title
        this._dataLancamento = teste.Released
        this._duracao = teste.Runtime
        this._genero = teste.Genre
        this._diretor = teste.Director
        this._atores = teste.Actors
        this._enredo = teste.Plot
        this._img = teste.Poster
    }

    get infos(){
        return {
            titulo: this._titulo,
            data: this._dataLancamento,
            duracao: this._duracao,
            genero: this._genero,
            diretor: this._diretor,
            atores: this._atores,
            enredo: this._enredo,
            img: this._img, 
        }
    } 


}