class OMDbController {

    static buscaFilme(filmePesquisado) {
        var filme = new OMDbModel()
        filme.buscaDados(filmePesquisado)

        var mostraFilme = new OMDbView()
        mostraFilme.render(filme.infos)

    }
}
