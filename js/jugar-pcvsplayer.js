let turno = 1
let min = 1
let max = 9
let x
let listaDisponibles = [1,2,3,4,5,6,7,8,9]
let listaOcupados = []

function boton1(){  
    if (turno == 1){
        document.getElementById("inp-1").value = "X"
        document.getElementById("inp-1").disabled = true;
        document.getElementById("butt-1").disabled = true;
        document.getElementById("inp-1").style.color="#01BAEF"
        turno = 0
        const index = listaDisponibles.indexOf(1);
        if (index > -1) {
            listaDisponibles.splice(index, 1);
        }
        listaOcupados.push(1)
        window.setTimeout(generarRandom,1000)
    }
    else{
        document.getElementById("inp-1").value="O"
        document.getElementById("inp-1").disabled = true;
        document.getElementById("butt-1").disabled = true;
        document.getElementById("inp-1").style.color="#FFB30F"
        const index = listaDisponibles.indexOf(1);
        if (index > -1) {
            listaDisponibles.splice(index, 1);
        }
        turno = 1
        listaOcupados.push(1)
        ganador()
    }
}
function boton2(){  
    if (turno == 1){
        document.getElementById("inp-2").value = "X"
        document.getElementById("inp-2").disabled = true;
        document.getElementById("butt-2").disabled = true;
        document.getElementById("inp-2").style.color="#01BAEF"
        turno = 0
        const index = listaDisponibles.indexOf(2);
        if (index > -1) {
            listaDisponibles.splice(index, 1);
        }
        listaOcupados.push(2)
        window.setTimeout(generarRandom,1000)
    }
    else{
        document.getElementById("inp-2").value="O"
        document.getElementById("inp-2").disabled = true;
        document.getElementById("butt-2").disabled = true;
        document.getElementById("inp-2").style.color="#FFB30F"
        const index = listaDisponibles.indexOf(2);
        if (index > -1) {
            listaDisponibles.splice(index, 1);
        }
        turno = 1
        listaOcupados.push(2)
        ganador()
    }
}
function boton3(){  
    if (turno == 1){
        document.getElementById("inp-3").value = "X"
        document.getElementById("inp-3").disabled = true;
        document.getElementById("butt-3").disabled = true;
        document.getElementById("inp-3").style.color="#01BAEF"
        turno = 0
        const index = listaDisponibles.indexOf(3);
        if (index > -1) {
            listaDisponibles.splice(index, 1);
        }
        listaOcupados.push(3)
        window.setTimeout(generarRandom,1000)
    }
    else{
        document.getElementById("inp-3").value="O"
        document.getElementById("inp-3").disabled = true;
        document.getElementById("butt-3").disabled = true;
        document.getElementById("inp-3").style.color="#FFB30F"
        const index = listaDisponibles.indexOf(3);
        if (index > -1) {
            listaDisponibles.splice(index, 1);
        }
        turno = 1
        listaOcupados.push(3)
        ganador()
    }
}

function boton4(){  
    if (turno == 1){
        document.getElementById("inp-4").value = "X"
        document.getElementById("inp-4").disabled = true;
        document.getElementById("butt-4").disabled = true;
        document.getElementById("inp-4").style.color="#01BAEF"
        turno = 0
        const index = listaDisponibles.indexOf(4);
        if (index > -1) {
            listaDisponibles.splice(index, 1);
        }
        listaOcupados.push(4)
        window.setTimeout(generarRandom,1000)
    }
    else{
        document.getElementById("inp-4").value="O"
        document.getElementById("inp-4").disabled = true;
        document.getElementById("butt-4").disabled = true;
        document.getElementById("inp-4").style.color="#FFB30F"
        const index = listaDisponibles.indexOf(4);
        if (index > -1) {
            listaDisponibles.splice(index, 1);
        }
        turno = 1
        listaOcupados.push(4)
        ganador()
    }
}
function boton5(){  
    if (turno == 1){
        document.getElementById("inp-5").value = "X"
        document.getElementById("inp-5").disabled = true;
        document.getElementById("butt-5").disabled = true;
        document.getElementById("inp-5").style.color="#01BAEF"
        turno = 0
        const index = listaDisponibles.indexOf(5);
        if (index > -1) {
            listaDisponibles.splice(index, 1);
        }
        listaOcupados.push(5)
        window.setTimeout(generarRandom,1000)
    }
    else{
        document.getElementById("inp-5").value="O"
        document.getElementById("inp-5").disabled = true;
        document.getElementById("butt-5").disabled = true;
        document.getElementById("inp-5").style.color="#FFB30F"
        const index = listaDisponibles.indexOf(5);
        if (index > -1) {
            listaDisponibles.splice(index, 1);
        }
        turno = 1
        listaOcupados.push(5)
        ganador()
    }
}
function boton6(){  
    if (turno == 1){
        document.getElementById("inp-6").value = "X"
        document.getElementById("inp-6").disabled = true;
        document.getElementById("butt-6").disabled = true;
        document.getElementById("inp-6").style.color="#01BAEF"
        turno = 0
        const index = listaDisponibles.indexOf(6);
        if (index > -1) {
            listaDisponibles.splice(index, 1);
        }
        listaOcupados.push(6)
        window.setTimeout(generarRandom,1000)
    }
    else{
        document.getElementById("inp-6").value="O"
        document.getElementById("inp-6").disabled = true;
        document.getElementById("butt-6").disabled = true;
        document.getElementById("inp-6").style.color="#FFB30F"
        const index = listaDisponibles.indexOf(6);
        if (index > -1) {
            listaDisponibles.splice(index, 1);
        }
        turno = 1
        listaOcupados.push(6)
        ganador()
    }
}
function boton7(){  
    if (turno == 1){
        document.getElementById("inp-7").value = "X"
        document.getElementById("inp-7").disabled = true;
        document.getElementById("butt-7").disabled = true;
        document.getElementById("inp-7").style.color="#01BAEF"
        turno = 0
        const index = listaDisponibles.indexOf(7);
        if (index > -1) {
            listaDisponibles.splice(index, 1);
        }
        listaOcupados.push(7)
        window.setTimeout(generarRandom,1000)
    }
    else{
        document.getElementById("inp-7").value="O"
        document.getElementById("inp-7").disabled = true;
        document.getElementById("butt-7").disabled = true;
        document.getElementById("inp-7").style.color="#FFB30F"
        const index = listaDisponibles.indexOf(7);
        if (index > -1) {
            listaDisponibles.splice(index, 1);
        }
        turno = 1
        listaOcupados.push(7)
        ganador()
    }
}
function boton8(){  
    if (turno == 1){
        document.getElementById("inp-8").value = "X"
        document.getElementById("inp-8").disabled = true;
        document.getElementById("butt-8").disabled = true;
        document.getElementById("inp-8").style.color="#01BAEF"
        turno = 0
        const index = listaDisponibles.indexOf(8);
        if (index > -1) {
            listaDisponibles.splice(index, 1);
        }
        listaOcupados.push(8)
        window.setTimeout(generarRandom,1000)
    }
    else{
        document.getElementById("inp-8").value="O"
        document.getElementById("inp-8").disabled = true;
        document.getElementById("butt-8").disabled = true;
        document.getElementById("inp-8").style.color="#FFB30F"
        const index = listaDisponibles.indexOf(8);
        if (index > -1) {
            listaDisponibles.splice(index, 1);
        }
        turno = 1
        listaOcupados.push(8)
        ganador()
    }
}
function boton9(){  
    if (turno == 1){
        document.getElementById("inp-9").value = "X"
        document.getElementById("inp-9").disabled = true;
        document.getElementById("butt-9").disabled = true;
        document.getElementById("inp-9").style.color="#01BAEF"
        turno = 0
        const index = listaDisponibles.indexOf(9);
        if (index > -1) {
            listaDisponibles.splice(index, 1);
        }
        listaOcupados.push(9)
        window.setTimeout(generarRandom,1000)
    }
    else{
        document.getElementById("inp-9").value="O"
        document.getElementById("inp-9").disabled = true;
        document.getElementById("butt-9").disabled = true;
        document.getElementById("inp-9").style.color="#FFB30F"
        const index = listaDisponibles.indexOf(9);
        if (index > -1) {
            listaDisponibles.splice(index, 1);
        }
        listaOcupados.push(9)
        ganador()
        turno = 1
    }
}

function generarRandom(){
    if (turno == 0){
        x = Math.floor(Math.random()*(max-min+1)+min)
        buscarRandom()
    }
}
function buscarRandom(){
    //Número 1
    //Si el número random es 1, y está en la lista de cuadrantes disponibles, juega la partida y se cambia el turno
    if (x==1 && listaDisponibles.includes(1)){
        boton1()
    }
    // Si el número random es 1, pero no está en la lista de los cuadrantes disponibles, se genera un nuevo número random
    else if (x==1 && listaOcupados.includes(1) && listaDisponibles.length > 1){
        generarRandom()
    }

    // Número 2
    //Si el número random es 2, y está en la lista de cuadrantes disponibles, juega la partida y se cambia el turno
    else if (x==2 && listaDisponibles.includes(2)){
        boton2()
    }
    // Si el número random es 2, pero no está en la lista de los cuadrantes disponibles, se genera un nuevo número random
    else if (x==2 && listaOcupados.includes(2) && listaDisponibles.length > 1){
        generarRandom()
    }
    
    //Número 3
    //Si el número random es 3, y está en la lista de cuadrantes disponibles, juega la partida y se cambia el turno
    else if (x==3 && listaDisponibles.includes(3)){
        boton3()
    }
    // Si el número random es 3, pero no está en la lista de los cuadrantes disponibles, se genera un nuevo número random
    else if (x==3 && listaOcupados.includes(3) && listaDisponibles.length > 1){
        generarRandom()
    }

    //Número 4
    //Si el número random es 4, y está en la lista de cuadrantes disponibles, juega la partida y se cambia el turno
    else if (x==4 && listaDisponibles.includes(4)){
        boton4()
    }
    // Si el número random es 4, pero no está en la lista de los cuadrantes disponibles, se genera un nuevo número random
    else if (x==4 && listaOcupados.includes(4) && listaDisponibles.length > 1){
        generarRandom()
    }

    //Número 5
    //Si el número random es 5, y está en la lista de cuadrantes disponibles, juega la partida y se cambia el turno
    else if (x==5 && listaDisponibles.includes(5)){
        boton5()
    }
    // Si el número random es 5, pero no está en la lista de los cuadrantes disponibles, se genera un nuevo número random
    else if (x==5 && listaOcupados.includes(5) && listaDisponibles.length > 1){
        generarRandom()
    }
    //Número 6
    //Si el número random es 6, y está en la lista de cuadrantes disponibles, juega la partida y se cambia el turno
    else if (x==6 && listaDisponibles.includes(6)){
        boton6()
    }
    // Si el número random es 6, pero no está en la lista de los cuadrantes disponibles, se genera un nuevo número random
    else if (x==6 && listaOcupados.includes(6) && listaDisponibles.length > 1){
        generarRandom()
    }

    //Número 7
    //Si el número random es 7, y está en la lista de cuadrantes disponibles, juega la partida y se cambia el turno
    else if (x==7 && listaDisponibles.includes(7)){
        boton7()
    }
    // Si el número random es 7, pero no está en la lista de los cuadrantes disponibles, se genera un nuevo número random
    else if (x==7 && listaOcupados.includes(7) && listaDisponibles.length > 1){
        generarRandom()
    }

    //Número 8
    //Si el número random es 8, y está en la lista de cuadrantes disponibles, juega la partida y se cambia el turno
    else if (x==8 && listaDisponibles.includes(8)){
        boton8()
    }
    // Si el número random es 8, pero no está en la lista de los cuadrantes disponibles, se genera un nuevo número random
    else if (x==8 && listaOcupados.includes(8)&& listaDisponibles.length > 1){
        generarRandom()
    }
    //Número 9
    //Si el número random es 9, y está en la lista de cuadrantes disponibles, juega la partida y se cambia el turno
    else if (x==9 && listaDisponibles.includes(9)){
        boton9()
    }
    // Si el número random es 9, pero no está en la lista de los cuadrantes disponibles, se genera un nuevo número random
    else if (x==9 && listaOcupados.includes(9)&& listaDisponibles.length > 1){
        generarRandom()
    }
    else{
        recargarPCvsJugador()
    }


}
