
//set_name

const cardsToSet = (cards) => {
    const setDictionary = {};
    for(const card of cards) {
        if(card.set_name in setDictionary) {
            setDictionary[card.set_name].push(card);
        }
        else{
            setDictionary[card.set_name] = [card];
        }
    }
    console.log(setDictionary);
    return setDictionary;
}

export default cardsToSet;