
import _ from 'underscore';
//Esta funcion crea un nuevo deck
export const crearDeck = (tipoDeCartas, tiposEspeciales) =>{
    let deck = [];
    //ciclo interactivo
    for(let i = 2; i<=10; i++){
        for (let tipo of tipoDeCartas){
            deck.push ( i + tipo);
        }
    }

    for (let tipo of tipos ){
        for (let esp of especiales){
            deck.push (esp + tipo);
        }
    }
    // console.log ( deck );
    deck = _.shuffle ( deck );
    console.log (deck);
    return deck; 
}