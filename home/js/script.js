const h1Element = document.getElementById("primeiroTitulo")

h1Element.addEventListener("click", ()=> {
   alert("Para saber mais acesse nossas próximas páginas")

})

h1Element.addEventListener("mouseover", ()=>{
    h1Element.style.backgroundColor = "#5f9ea0";
    h1Element.style.color = "#fff"
})

h1Element.addEventListener("mouseout", ()=>{
    h1Element.style.backgroundColor = "#fff";
    h1Element.style.color = "#000"
})

// selecionar todos os elementos com a classe "opcoes"
const options = document.querySelectorAll(".opcoes");

options.forEach(function(option) {
    option.addEventListener("mouseover", function() {
      option.style.backgroundColor = "lightgreen";
    });
  });

  options.forEach(function(option) {
    option.addEventListener("mouseout", function() {
      option.style.backgroundColor = "white";
    });
  });


  
