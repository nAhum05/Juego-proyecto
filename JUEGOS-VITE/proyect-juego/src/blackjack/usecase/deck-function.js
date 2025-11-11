
import _ from 'underscore';
//Esta funcion crea un nuevo deck

/**
 * 
 * @param {array} tiposDeCarta 
 * @param {array} tiposEspeciales 
 * @returns {array} retorna un nuevo deck de cartas 
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) =>{
    if(!tiposDeCarta) throw new Error('tipo de carta obligatoria como un arreglo obligatorio')


    let deck = [];
    //ciclo interactivo
    for(let i = 2; i<=10; i++){
        for (let tipo of tiposDeCarta){
            deck.push ( i + tipo);
        }
    }

    for (let tipo of tiposDeCarta ){
        for (let esp of tiposEspeciales){
            deck.push (esp + tipo);
        }
    }
    // console.log ( deck );
    deck = _.shuffle ( deck );
    console.log (deck);
    return deck; 
}