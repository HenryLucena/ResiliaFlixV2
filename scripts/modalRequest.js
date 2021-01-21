// requisicao para modal
async function infoFilme (nomeFilme, numFilme) {
    const key = 'df65174b'
    let url = `https://www.omdbapi.com/?t=${nomeFilme}&apikey=${key}`

    let resposta = await fetch(url)
        .then(res => {
            let req = res.json()
            return req
        })
        
        let ano = document.getElementById(`ano-${numFilme}`)
        ano.textContent = resposta.Year
    
        if (resposta.Director == 'N/A') {
            resposta.Director = 'Não aplicável'
        }

        let diretor = document.getElementById(`diretor-${numFilme}`)
        diretor.textContent = `Diretor(es): ${resposta.Director}`

        let sinopse = document.getElementById(`sinopse-${numFilme}`)
        sinopse.textContent = resposta.Plot
        
        // traducao da sinopse via redirecionamento para Google Tradutor
        let traducao = document.getElementById(`traducao-${numFilme}`)
        traducao.innerHTML = `<a href="https://translate.google.com.br/?hl=pt-BR&ui=tob&sl=en&tl=pt&text=${resposta.Plot}%0A&op=translate" target="_blank">Traduzir sinopse</a>`
}    

// adicionando eventos
document.getElementById('filme1').addEventListener('click', infoFilme('Avengers: Endgame', 1))
document.getElementById('filme2').addEventListener('click', infoFilme('The Boys', 2))
document.getElementById('filme3').addEventListener('click', infoFilme('Fleabag', 3))
document.getElementById('filme4').addEventListener('click', infoFilme('Life Itself', 4))
document.getElementById('filme5').addEventListener('click', infoFilme('Merli', 5))
document.getElementById('filme6').addEventListener('click', infoFilme('Pride and Prejudice', 6))
document.getElementById('filme7').addEventListener('click', infoFilme('Shrek', 7))
document.getElementById('filme8').addEventListener('click', infoFilme('Fantastic Beasts and Where to Find Them', 8))
document.getElementById('filme9').addEventListener('click', infoFilme('Fight Club', 9))
document.getElementById('filme10').addEventListener('click', infoFilme('Freedom Writers', 10))
document.getElementById('filme11').addEventListener('click', infoFilme('How to Get Away with Murder', 11))
document.getElementById('filme12').addEventListener('click', infoFilme('Hacksaw Ridge', 12))