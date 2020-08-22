var search = document.getElementById("input-search") //cria uma variavel para pegar o que é digitado na input de pesquisa
var searchcontent = String(search.value) // transforma a variavel pesquisa em string e pega seu valor

function pesquisar(){ //Função de Pesquisa
     if(searchcontent === "teste"){
         return(
        window.location.href = "google.com"
        )
    }
}

document.addEventListener('keypress', function(e){ //Função Para Quando Apertar o Enter Aciona o botao de Pesquisar
    if(e.which == 13){
      pesquisar();
    }
  }, false);
  
  
