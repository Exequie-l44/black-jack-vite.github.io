import _ from 'underscore';

/**
 * 
 * @param {Array<string>} tiposCarta ejemplo ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales ejemplo ['A','J','Q','K']
 * @returns {Array}retorna un nuevo arreglo de cartas 
 */

// Esta función crea un nuevo deck
//exportacion individual 
export const crearDeck = (tiposCarta, tiposEspeciales) => {

//if (!tiposCarta ) throw new Error('tiposCarta es obligatorio');
  //  if (!tiposCarta.lenght > 0 ) throw new Error('tiposCarta debe ser un arreglo de strings');

    let deck = [];
        for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

//exportacion por defecto  
// export default crearDeck;
