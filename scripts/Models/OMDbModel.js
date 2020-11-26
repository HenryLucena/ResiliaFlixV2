class OMDbModel {

    constructor() {
        this._titulo = ''
        this._dataLancamento = ''
        this._duracao = ''
        this._genero = ''
        this._diretor = ''
        this._atores = ''
        this._plot = ''
        this._img = ''
    }

    buscaDados(pesquisa) {
        let request = new XMLHttpRequest

        request.open('GET', `http://www.omdbapi.com/?t=${pesquisa}&plot=full&apikey=a0581d9a`)
 
            request.addEventListener('load', () => {
                let dados = JSON.parse(request.responseText)

                this._atualiza(dados)            

            })
        

        request.send()
    }

    _atualiza(teste) {
        this._titulo = teste.Title
        this._dataLancamento = teste.Released
        this._duracao = teste.Runtime
        this._genero = teste.Genre
        this._diretor = teste.Director
        this._atores = teste.Actors
        this._plot = teste.Plot
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
            plot: this._plot,
            img: this._img, 
        }
    } 


    get titulo() {
        return {titulo: this._titulo}
    }

    get data() {
        console.log(this._dataLancamento)
        return this._dataLancamento
    }

    get duracao() {
        return this._duracao
    }
    
    get genero(){
        return this._genero
    }

    get diretor(){
        return this._diretor
    }

    get atores(){
        return this._atores
    }

    get plot() {
        return this._plot
    }
    
    get img() {
        return this._img
    }
}