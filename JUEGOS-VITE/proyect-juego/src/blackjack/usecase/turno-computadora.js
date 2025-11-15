import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta"; 

/**
 * @param {Number} puntosMinimos : puntos que tiene la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML : arreglo con los elementos HTML donde se muestra los puntos 
 * @param {HTMLElement} divCartasComputadora: elemento HTML para mostrar las cartas de la computadora
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora, deck=[]  ) => {

    if(!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    if (!puntosHTML) throw new Error ('Puntos HTML son necesarios');    

    let puntosComputadora = 0;
    
    do {
        const carta = pedirCarta ( deck );
        
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}


