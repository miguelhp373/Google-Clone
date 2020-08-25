function pesquisar(){
  var inputsearch = document.getElementById("input-search");
  var resp = String(inputsearch.value)

  if(resp =="dino" || resp == "t-rex"){
    window.location.href = "t-rex/pages/index.html"
  } else if(resp == ""){
    return(null)
  }else{
  var url = 'https://www.google.com/search?q=' + resp;
    window.open(url, 'google');
  }
}


document.addEventListener('keypress', function(e){
  if(e.which == 13){
    pesquisar();
  }
}, false);
