//Elimina el tablero para iniciar de nuevo
function recargar(){
    document.getElementById('inp-1').value = '';
    document.getElementById('inp-2').value = '';
    document.getElementById('inp-3').value = '';
    document.getElementById('inp-4').value = '';
    document.getElementById('inp-5').value = '';
    document.getElementById('inp-6').value = '';
    document.getElementById('inp-7').value = '';
    document.getElementById('inp-8').value = '';
    document.getElementById('inp-9').value = '';
    document.getElementById("linea-1").style.opacity = "0";
    document.getElementById("linea-2").style.opacity = "0";
    document.getElementById("linea-3").style.opacity = "0";
    document.getElementById("linea-4").style.opacity = "0";
    document.getElementById("linea-5").style.opacity = "0";
    document.getElementById("linea-6").style.opacity = "0";
    document.getElementById("linea-7").style.opacity = "0";
    document.getElementById("linea-8").style.opacity = "0";
    document.getElementById("butt-1").disabled = false;
    document.getElementById("butt-2").disabled = false;
    document.getElementById("butt-3").disabled = false;
    document.getElementById("butt-4").disabled = false;
    document.getElementById("butt-5").disabled = false;
    document.getElementById("butt-6").disabled = false;
    document.getElementById("butt-7").disabled = false;
    document.getElementById("butt-8").disabled = false;
    document.getElementById("butt-9").disabled = false;
    console.clear();
    listaDisponibles = [1,2,3,4,5,6,7,8,9]
    listaOcupados = []
}

function recargarPCvsJugador(){
    recargar()
    turno=1
}

function recargarTodo(){
    recargar()
    document.getElementById("marcador-X").value=""
    document.getElementById("marcador-O").value=""
}
