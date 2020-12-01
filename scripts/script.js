let botaoRec = document.querySelector(".botao-rec")
let aviso = document.querySelector(".email-enviado")

botaoRec.addEventListener("click", ()=>{
    aviso.innerHTML = "Email enviado com sucesso!"
})