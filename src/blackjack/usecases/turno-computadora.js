import { pedirCarta, valorCarta, crearCartaHTML } from "./";

/**
 * 
 * @param {Number} puntosMinimos que la compuradora necesita para ganar
 * @param {Array<String>}deck
 * @param {HTMLElement} punntosHTML elemento html para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento html para mostrar las cartas
 * 
 */

// turno de la computadora
export const turnoComputadora = ( puntosMinimos, puntosHTML,divCartasComputadora,deck =[] ) => {

    if(!puntosMinimos)throw new error ('Puntos minimos son necesarios ');
    if(!puntosHTML)throw new error ('Argumento HTML son necesarios ');
    if(!deck) throw new error ('Se necesita el deck ')

    let puntosComputadora=0;

    do {
        const carta = pedirCarta( deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML(carta);
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

