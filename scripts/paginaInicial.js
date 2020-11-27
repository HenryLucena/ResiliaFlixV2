async function filmes () {
    let key = 'df65174b'
    let url = `http://www.omdbapi.com/?s=anne+frank&apikey=${key}`
    

    let resposta = await fetch(url)
        .then(res => {
            return res.json()
        })

        console.log(resposta)
    //     .then(json => {
            
    // })
}
