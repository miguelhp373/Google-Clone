var search = String(document.getElementById("input-search").value) 
// transforma a variavel pesquisa em string e pega seu valor


console.log({search})

function pesquisar(){ //Função de Pesquisa
     if(search === "teste"){
        window.location.href = "https://www.google.com.br/"   
    }else if(search.length == 0){
      window.location.href = "t-rex/pages/index.html"
    }
  }

  document.addEventListener('keypress', function(e){ //Função Para Quando Apertar o Enter Aciona o botao de Pesquisar
    if(e.which == 13){
      pesquisar();
    }
  }, false);
  
  




