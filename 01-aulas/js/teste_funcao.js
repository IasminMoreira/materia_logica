//colocar o curso encima das imagens e exibir a div com a imagem correspondente

function mostrarCamada1(){
    document.getElementById("camada1").style.visibility = "visible";
    document.getElementById("camada2").style.visibility = "hidden";
    document.getElementById("camada3").style.visibility = "hidden";
}

function mostrarCamada2(){
    document.getElementById("camada2").style.visibility = "visible";
    document.getElementById("camada1").style.visibility = "hidden";
    document.getElementById("camada3").style.visibility = "hidden";
}

function mostrarCamada3(){
    document.getElementById("camada3").style.visibility = "visible";
    document.getElementById("camada1").style.visibility = "hidden";
    document.getElementById("camada2").style.visibility = "hidden";
}

function ocultarCamadas(){
    document.getElementById("camada1").style.visibility = "hidden";
    document.getElementById("camada2").style.visibility = "hidden";
    document.getElementById("camada3").style.visibility = "hidden";
}

