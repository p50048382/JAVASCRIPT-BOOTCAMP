// *Practicing this keyword and object
function makeDeck(){
    const deck = [];
    const suits = ['hearts','diamonds','spades','clubs'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
    for (let value of values.split(',')){
        for (let suit of suits){
            deck.push({value,suit});
        }
    }
    return deck
}
function drawCard(deck){
    return deck.pop();
}

// const myDeck = makeDeck();
// const card1 = drawCard(myDeck);
const myDeck = {
    deck:[],
    drawnCard:[],
    suits:['hearts','diamonds','spades','clubs'],
    values:'2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initializeDeck(){
        const {values,suits,deck}=this;
        for (let value of values.split(',')){
            for (let suit of suits){
                deck.push({value,suit});
            }
        }
    },
    drawCard(){
        const card =this.deck.pop();
        this.drawnCard.push(card);
        return card;
    },
    drawMultiple(numOfCards){
        const cards = [];
        for(let i = 0;i<numOfCards;i++){
           cards.push( this.drawCard());
        }
        return cards;
    },
     shuffle(){
         const {deck:arr}=this;
        for(let i =arr.length -1;i>0;i--){
            let j = Math.floor(Math.random()*(i+1));
            [arr[i],arr[j]]=[arr[j],arr[i]];
            // console.log(arr);
        }
        }

}

