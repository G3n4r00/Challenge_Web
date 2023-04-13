const h1Element = document.getElementById("primeiroTitulo")

h1Element.addEventListener("click", ()=> {
    alert("Para saber mais acesse nossas p´roximas páginas")

})



h1Element.addEventListener("mouseover", ()=>{
    h1Element.style.backgroundColor = "#5f9ea0";
    h1Element.style.color = "#fff"
})

h1Element.addEventListener("mouseout", ()=>{
    h1Element.style.backgroundColor = "#fff";
    h1Element.style.color = "#000"
})



