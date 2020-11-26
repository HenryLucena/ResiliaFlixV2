class OMDbController {

    constructor(pesquisa) {
        this._filmePesquisado = pesquisa
    }

   buscaFilme() {
        var filme = new OMDbModel()
        filme.buscaDados(this._filmePesquisado)
        
        var mostraFilme = new OMDbView()
        mostraFilme.render(filme)
    }
}
