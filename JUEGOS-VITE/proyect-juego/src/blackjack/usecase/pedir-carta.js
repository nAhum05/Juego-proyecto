
/**
 * Esta funcion permite tomar una carta del deck 
 * @param {array<String>} deck 
 * @returns {String} retorna la carta del deck
 */
export const pedirCarta = () => {

   if (deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}