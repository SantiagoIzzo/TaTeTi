window.onload=function(){  
    const win=document.getElementById("wins") 
    const ok=document.getElementById("yes")         
    const textoGanador=document.getElementById("ganador")      
    const restart=document.getElementById("boton-restart")       
    const fila1=document.getElementsByClassName("fila1")    
    const fila2=document.getElementsByClassName("fila2")    
    const fila3=document.getElementsByClassName("fila3")  
    const columna1=document.getElementsByClassName("columna1")    
    const columna2=document.getElementsByClassName("columna2")
    const columna3=document.getElementsByClassName("columna3")
    const casillas=document.getElementsByClassName("casilla")
    var tablero=[]
    var jugador1="X"
    var jugador2="O"
    var turno=jugador1
    var ganador=""
    var finDelJuego=false;
    var jugadas=0

    const cambiarTurno=function(){
        if(turno==jugador1){
            turno=jugador2
        }else{
            turno=jugador1
        }
    }
    const controlarDiagonales=function(){
        
        if(fila1[0].classList.contains(turno) && fila2[1].classList.contains(turno) && fila3[2].classList.contains(turno)  ){
            ganador=turno
            finDelJuego=true   
        }

        if(fila1[2].classList.contains(turno) && fila2[1].classList.contains(turno) && fila3[0].classList.contains(turno)  ){
            ganador=turno
            finDelJuego=true   
        }
    }
    const controlarFila=function(fila){
        let filaCompleta=true
        for(let i=0;i<3;i++){
           if(!fila[i].classList.contains(turno)) {
            filaCompleta=false
           }
        }
        if(filaCompleta){
            finDelJuego=true;
        }
    }
    const controlarColumna=function(columna){
        let columnaCompleta=true
        for(let i=0;i<3;i++){
           if(!columna[i].classList.contains(turno)) {
            columnaCompleta=false
           }
        }
        if(columnaCompleta){
            finDelJuego=true;
        }
    }
    const mostrarGanador=function(){
        restart.disabled=true;
        win.style.display="block"
        win.style.background=turno
        ok.style.color=turno
        textoGanador.innerText=turno+" Wins!"
    }

    ok.onclick=function(){
        restart.disabled=false;
        for(let i=0;i<3;i++){
            fila1[i].classList.remove(jugador1)
            fila2[i].classList.remove(jugador1)
            fila3[i].classList.remove(jugador1)  
            fila1[i].classList.remove(jugador2)
            fila2[i].classList.remove(jugador2)
            fila3[i].classList.remove(jugador2)  

            fila1[i].children[0].src=""
            fila2[i].children[0].src=""
            fila3[i].children[0].src="" 

            fila1[i].children[0].style.display="none"
            fila2[i].children[0].style.display="none"
            fila3[i].children[0].style.display="none" 
        }
        jugador1="X"
        jugador2="O"
        turno=jugador1
        win.style.display="none"
        finDelJuego=false;
        ganador=""
        jugadas=0
    }
   
    restart.onclick=function(){
        for(let i=0;i<3;i++){
            fila1[i].classList.remove(jugador1)
            fila2[i].classList.remove(jugador1)
            fila3[i].classList.remove(jugador1)  
            fila1[i].classList.remove(jugador2)
            fila2[i].classList.remove(jugador2)
            fila3[i].classList.remove(jugador2) 

            fila1[i].children[0].src=""
            fila2[i].children[0].src=""
            fila3[i].children[0].src=""   

            fila1[i].children[0].style.display="none"
            fila2[i].children[0].style.display="none"
            fila3[i].children[0].style.display="none" 
        }
        jugador1="X"
        jugador2="O"
        turno=jugador1
        win.style.display="none"
        finDelJuego=false;
        ganador=""
        jugadas=0
    }

    //FILA1
    fila1[0].onclick=function(){
        
        if(!finDelJuego && !this.classList.contains("O") && !this.classList.contains("X")){
            this.children[0].style.display="inline"
            this.children[0].src="img/"+turno+".png"
            this.classList.add(turno)            
            tablero[0]=turno
            controlarFila(fila1)
            controlarColumna(columna1)
            controlarDiagonales()
        }
        if(finDelJuego){
            mostrarGanador()
        }else{
            cambiarTurno()        
        }
    }
    fila1[1].onclick=function(){
        if(!finDelJuego && !this.classList.contains("O") && !this.classList.contains("X")){    
            this.children[0].style.display="inline"
            this.children[0].src="img/"+turno+".png"         
            this.classList.add(turno)
            tablero[1]=turno       
            controlarFila(fila1)
            controlarColumna(columna2)        
            controlarDiagonales()
        }  
        if(finDelJuego){
            mostrarGanador()
        }else{
            cambiarTurno()        
        }
        
    }
    fila1[2].onclick=function(){
        if(!finDelJuego && !this.classList.contains("O") && !this.classList.contains("X")){                    
            this.children[0].style.display="inline"
            this.children[0].src="img/"+turno+".png"            
            this.classList.add(turno)
            tablero[2]=turno
            controlarFila(fila1)
            controlarColumna(columna3)                       
            controlarDiagonales()
        }
        if(finDelJuego){
            mostrarGanador()
        }else{
            cambiarTurno()        
        }
        
    }

    //FILA2
    fila2[0].onclick=function(){
        if(!finDelJuego && !this.classList.contains("O") && !this.classList.contains("X")){ 
            this.children[0].style.display="inline"
            this.children[0].src="img/"+turno+".png"            
            this.classList.add(turno)        
            tablero[3]=turno     
            controlarFila(fila2)
            controlarColumna(columna1)        
            controlarDiagonales()
        }
        if(finDelJuego){
            mostrarGanador()
        }else{
            cambiarTurno()        
        }
        
    }
    fila2[1].onclick=function(){
        if(!finDelJuego && !this.classList.contains("O") && !this.classList.contains("X")){
            this.children[0].style.display="inline"
            this.children[0].src="img/"+turno+".png"
            this.classList.add(turno)
            tablero[4]=turno
            controlarFila(fila2)
            controlarColumna(columna2)                
            controlarDiagonales()
        }
        if(finDelJuego){
            mostrarGanador()
        }else{
            cambiarTurno()        
        }
        
    }
    fila2[2].onclick=function(){
        if(!finDelJuego && !this.classList.contains("O") && !this.classList.contains("X")){
            this.children[0].style.display="inline"
            this.children[0].src="img/"+turno+".png"            
            this.classList.add(turno)
            tablero[5]=turno    
            controlarFila(fila2)
            controlarColumna(columna3)                        
            controlarDiagonales()
        }
        if(finDelJuego){
            mostrarGanador()
        }else{
            cambiarTurno()        
        }
        
    }

    //FILA3
    fila3[0].onclick=function(){
        if(!finDelJuego && !this.classList.contains("O") && !this.classList.contains("X")){
            this.children[0].style.display="inline"
            this.children[0].src="img/"+turno+".png"           
            this.classList.add(turno)
            tablero[6]=turno
            controlarFila(fila3)
            controlarColumna(columna1)        
            controlarDiagonales()
        }
        if(finDelJuego){
            mostrarGanador()
        }else{
            cambiarTurno()        
        }
        
    }
    fila3[1].onclick=function(){
        if(!finDelJuego && !this.classList.contains("O") && !this.classList.contains("X")){
            this.children[0].style.display="inline"
            this.children[0].src="img/"+turno+".png"            
            this.classList.add(turno)
            tablero[7]=turno
            controlarFila(fila3)
            controlarColumna(columna2)                
            controlarDiagonales()
        }
        if(finDelJuego){
            mostrarGanador()
        }else{
            cambiarTurno()        
        }
        
    }
    fila3[2].onclick=function(){
        if(!finDelJuego && !this.classList.contains("O") && !this.classList.contains("X")){
            this.children[0].style.display="inline"
            this.children[0].src="img/"+turno+".png"            
            this.classList.add(turno)
            tablero[8]=turno
            controlarFila(fila3)
            controlarColumna(columna3)                
            controlarDiagonales()
        }
        if(finDelJuego){
            mostrarGanador()
        }else{
            cambiarTurno()        
        }   
    }


    
}