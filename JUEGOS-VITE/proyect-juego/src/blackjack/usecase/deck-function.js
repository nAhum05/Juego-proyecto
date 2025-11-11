import _ from 'underscore';
//Esta funcion crea un nuevo deck
const crearDeck = (tipoDeCartas, tiposEspeciales) =>{

    for(let i = 2; i<=10; i++){
        for (let tipo of tipo){
            crearDeck.push ( i + tipoDeCartas);
        }
    }

    for (let tipo of tiposEspeciales ){
        for (let esp of especiales){
            deck.push (esp + tipo);
        }
    }
    // console.log ( deck );
    deck = _.shuffle ( deck );
    console.log (deck);
    return deck; 
}