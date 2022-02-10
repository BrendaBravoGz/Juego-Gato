function ganador(){
    let popupX = document.getElementById("popupX")
    let cerrar=document.getElementById("cerrar")
    let confe= document.getElementById("my-canvas")
    var confettiElement = document.getElementById('my-canvas');
    var confettiSettings = { target: confettiElement };
    var confetti = new ConfettiGenerator(confettiSettings);
    let b1 = document.getElementById("inp-1").value
    let b2 = document.getElementById("inp-2").value
    let b3 = document.getElementById("inp-3").value
    let b4 = document.getElementById("inp-4").value
    let b5 = document.getElementById("inp-5").value
    let b6 = document.getElementById("inp-6").value
    let b7 = document.getElementById("inp-7").value
    let b8 = document.getElementById("inp-8").value
    let b9 = document.getElementById("inp-9").value

    // verifica si X ganó
    if(b1 == "X" && b2 =="X" && b3 =="X"){
        puntuacionX= puntuacionX + 1
        document.getElementById("marcador-X").value= puntuacionX
        document.getElementById("linea-1").style.opacity = "1";
        retrasoX = window.setTimeout(recargar, 500);
        window.setTimeout(popupx,800)
        document.getElementById("gano").innerHTML = "Ganó X";
        cerrar.onclick=function(){
            popupX.classList.remove('active')
            confe.classList.remove('active')
        }
        confetti.render();
    }
    else if (b4 == "X" && b5 =="X" && b6 =="X"){
        puntuacionX=puntuacionX + 1
        document.getElementById("marcador-X").value= puntuacionX
        document.getElementById("linea-2").style.opacity = "1";
        retrasoX = window.setTimeout(recargar, 500);
        window.setTimeout(popupx,800)
        document.getElementById("gano").innerHTML = "Ganó X";
        cerrar.onclick=function(){
            popupX.classList.remove('active')
            confe.classList.remove('active')
        }
        confetti.render();
    }
    else if (b7 == "X" && b8 =="X" && b9 =="X"){
        puntuacionX=puntuacionX + 1
        document.getElementById("marcador-X").value= puntuacionX
        document.getElementById("linea-3").style.opacity = "1";
        retrasoX = window.setTimeout(recargar, 500);
        window.setTimeout(popupx,800)
        document.getElementById("gano").innerHTML = "Ganó X";
        cerrar.onclick=function(){
            popupX.classList.remove('active')
            confe.classList.remove('active')
        }
        confetti.render();
    }
    else if (b1 == "X" && b4 =="X" && b7 =="X"){
        puntuacionX=puntuacionX + 1
        document.getElementById("marcador-X").value= puntuacionX
        document.getElementById("linea-5").style.opacity = "1";
        retrasoX = window.setTimeout(recargar, 500);
        window.setTimeout(popupx,800)
        document.getElementById("gano").innerHTML = "Ganó X";
        cerrar.onclick=function(){
            popupX.classList.remove('active')
            confe.classList.remove('active')
        }
        confetti.render();
    }
    else if (b2 == "X" && b5 =="X" && b8 =="X"){
        puntuacionX=puntuacionX + 1
        document.getElementById("marcador-X").value= puntuacionX
        document.getElementById("linea-4").style.opacity = "1";
        retrasoX = window.setTimeout(recargar, 500);
        window.setTimeout(popupx,800)
        document.getElementById("gano").innerHTML = "Ganó X";
        cerrar.onclick=function(){
            popupX.classList.remove('active')
            confe.classList.remove('active')
        }
        confetti.render();
    }
    else if (b3 == "X" && b6 =="X" && b9 =="X"){
        puntuacionX=puntuacionX + 1
        document.getElementById("marcador-X").value= puntuacionX
        document.getElementById("linea-6").style.opacity = "1";
        retrasoX = window.setTimeout(recargar, 500);
        window.setTimeout(popupx,800)
        document.getElementById("gano").innerHTML = "Ganó X";
        cerrar.onclick=function(){
            popupX.classList.remove('active')
            confe.classList.remove('active')
        }
        confetti.render();
    }
    else if (b1 == "X" && b5 =="X" && b9 =="X"){
        puntuacionX=puntuacionX + 1
        document.getElementById("marcador-X").value= puntuacionX
        document.getElementById("linea-7").style.opacity = "1";
        retrasoX = window.setTimeout(recargar, 500);
        window.setTimeout(popupx,800)
        document.getElementById("gano").innerHTML = "Ganó X";
        cerrar.onclick=function(){
            popupX.classList.remove('active')
            confe.classList.remove('active')
        }
        confetti.render();
    }
    else if (b3 == "X" && b5 =="X" && b7 =="X"){
        puntuacionX=puntuacionX + 1
        document.getElementById("marcador-X").value= puntuacionX
        document.getElementById("linea-8").style.opacity = "1";
        retrasoX = window.setTimeout(recargar, 500);
        window.setTimeout(popupx,800)
        document.getElementById("gano").innerHTML = "Ganó  X";
        cerrar.onclick=function(){
            popupX.classList.remove('active')
            confe.classList.remove('active')
        }
        confetti.render();
    }
    // verifica si O ganó
    else if(b1 == "O" && b2 =="O" && b3 =="O"){
        puntuacionO= puntuacionO + 1
        document.getElementById("marcador-O").value= puntuacionO
        document.getElementById("linea-1").style.opacity = "1";
        retrasoO = window.setTimeout(recargar, 500);
        window.setTimeout(popupx,800)
        document.getElementById("gano").innerHTML = "Ganó O";
        cerrar.onclick=function(){
            popupX.classList.remove('active')
            confe.classList.remove('active')
        }
        confetti.render();
    }
    else if (b4 == "O" && b5 =="O" && b6 =="O"){
        puntuacionO=puntuacionO + 1
        document.getElementById("marcador-O").value= puntuacionO
        document.getElementById("linea-2").style.opacity = "1";
        retrasoO = window.setTimeout(recargar, 500);
        window.setTimeout(popupx,800)
        document.getElementById("gano").innerHTML = "Ganó O";
        cerrar.onclick=function(){
            popupX.classList.remove('active')
            confe.classList.remove('active')
        }
        confetti.render();
    }
    else if (b7 == "O" && b8 =="O" && b9 =="O"){
        puntuacionO=puntuacionO + 1
        document.getElementById("marcador-X").value= puntuacionO
        document.getElementById("linea-3").style.opacity = "1";
        retrasoO = window.setTimeout(recargar, 500);
        window.setTimeout(popupx,800)
        document.getElementById("gano").innerHTML = "Ganó O";
        cerrar.onclick=function(){
            popupX.classList.remove('active')
            confe.classList.remove('active')
        }
        confetti.render();
    }
    else if (b1 == "O" && b4 =="O" && b7 =="O"){
        puntuacionO=puntuacionO + 1
        document.getElementById("marcador-O").value= puntuacionO
        document.getElementById("linea-5").style.opacity = "1";
        retrasoO = window.setTimeout(recargar, 500);
        window.setTimeout(popupx,800)
        document.getElementById("gano").innerHTML = "Ganó O";
        cerrar.onclick=function(){
            popupX.classList.remove('active')
            confe.classList.remove('active')
        }
        confetti.render();
    }
    else if (b2 == "O" && b5 =="O" && b8 =="O"){
        puntuacionO=puntuacionO + 1
        document.getElementById("marcador-O").value= puntuacionO
        document.getElementById("linea-4").style.opacity = "1";
        retrasoO = window.setTimeout(recargar, 500);
        window.setTimeout(popupx,800)
        document.getElementById("gano").innerHTML = "Ganó O";
        cerrar.onclick=function(){
            popupX.classList.remove('active')
            confe.classList.remove('active')
        }
        confetti.render();
    }
    else if (b3 == "O" && b6 =="O" && b9 =="O"){
        puntuacionO=puntuacionO + 1
        document.getElementById("marcador-O").value= puntuacionO
        document.getElementById("linea-6").style.opacity = "1";
        retrasoO = window.setTimeout(recargar, 500);
        window.setTimeout(popupx,800)
        document.getElementById("gano").innerHTML = "Ganó O";
        cerrar.onclick=function(){
            popupX.classList.remove('active')
            confe.classList.remove('active')
        }
        confetti.render();
    }
    else if (b1 == "O" && b5 =="O" && b9 =="O"){
        puntuacionO=puntuacionO + 1
        document.getElementById("marcador-O").value= puntuacionO
        document.getElementById("linea-7").style.opacity = "1";
        retrasoO = window.setTimeout(recargar, 500);
        window.setTimeout(popupx,800)
        document.getElementById("gano").innerHTML = "Ganó O";
        cerrar.onclick=function(){
            popupX.classList.remove('active')
            confe.classList.remove('active')
        }
        confetti.render();
    }
    else if (b3 == "O" && b5 =="O" && b7 =="O"){
        puntuacionO=puntuacionO + 1
        document.getElementById("marcador-O").value= puntuacionO
        document.getElementById("linea-8").style.opacity = "1";
        retrasoO = window.setTimeout(recargar, 500);
        window.setTimeout(popupx,800)
        document.getElementById("gano").innerHTML = "Ganó O";
        cerrar.onclick=function(){
            popupX.classList.remove('active')
            confe.classList.remove('active')
        }
        confetti.render();
    }
    console.log(listaOcupados)
    if (listaOcupados.length == 9){
        window.setTimeout(recargar, 500);
    }
}

