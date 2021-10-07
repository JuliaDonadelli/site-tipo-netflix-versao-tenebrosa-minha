
/*
    let filmeA = "images/filme1.png"
    let filmeB = "images/filme2.png"
    let filmeC = "images/filme3.png"




    document.querySelector(".lista-filmes").innerHTML = "<img src=" + filmeA + ">"
    document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmeB + ">"
    document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmeC + ">"

*/

let filmes = [ "images/filme1.png" , "images/filme2.png" , "images/filme3.jpg" , "images/filme4.jpg" , "images/filme5.jpg" , "images/filme6.jpg"]

/* document.querySelector(".lista-filmes").innerHTML = "<img src=" + filmes[0] + ">"
document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmes[1] + ">"
document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmes[2] + ">"
document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmes[3] + ">"
document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmes[4] + ">"
document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmes[5] + ">"
*/

function carregarFilmes(){
    let totalFilmes = filmes.length
    let divListaFilmes = document.querySelector(".lista-filmes")

// laço de repetição
for (let i = 0 ; i < totalFilmes ; i++)      {
 divListaFilmes.innerHTML += "<img src=" + filmes[i] + ">"
  }
}

function AdicionarFilme(){
    let nomeFilme = document.querySelector
    ("#nome-do-filme").value
    console.log(nomeFilme)
    let caminhoCompleto = "images/" + nomeFilme
    
    filmes.push(caminhoCompleto)
    
    carregarFilmes()

}












