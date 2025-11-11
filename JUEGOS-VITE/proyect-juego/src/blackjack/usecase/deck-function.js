
import _ from 'underscore';
//Esta funcion crea un nuevo deck
export const crearDeck = (tipoDeCarta, tiposEspeciales) =>{
    let deck = [];
    //ciclo interactivo
    for(let i = 2; i<=10; i++){
        for (let tipo of tipoDeCarta){
            deck.push ( i + tipo);
        }
    }

    for (let tipo of tipoDeCarta ){
        for (let esp of tiposEspeciales){
            deck.push (esp + tipo);
        }
    }
    // console.log ( deck );
    deck = _.shuffle ( deck );
    console.log (deck);
    return deck; 
}