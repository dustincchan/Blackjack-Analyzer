function Deck() {
  this.cards = [];
  var suits = ["Diamonds", "Clubs", "Hearts", "Spades"];
  var cardValues = ["2", "3", "4", "5", "6",  "7", "8", "9", "10", "J", "K", "Q", "A"];
  var that = this;

  cardValues.forEach(function(cardValue) {
    suits.forEach(function(suit) {
      that.cards.push([cardValue, suit]);
    });
  });
}

function Shoe(numDecks, penetration) { // -> Shuffled N Decks as a large array
  this.decks = [];
  this.cards = [];
  var that = this;

  if (penetration > numDecks) {
    throw new Error (
      "You can't have more penetration than number of decks"
    );
  }

  //We create a large array of (numDecks) decks and then shuffle it
  for (var deckNum = 0; deckNum < numDecks; deckNum ++) {
    var d = new Deck();
    this.decks.push(d.cards);
  }

  //FIXME: There's a better way to do this, I just cant get array.prototype.concat() to play nice
  this.decks.forEach(function(deck) {
    deck.forEach(function(card) {
      that.cards.push(card);
    });
  });

  function dealCard() { // -> [cardValue, suit]]
    this.cards.shift();
  }

  //identical to dealCard(), but makes the playing code more understandable
  function burnCard() {
    this.cards.shift();
  }
}

//Fisher-Yates shuffle algorithm
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle
  while (0 !== currentIndex) {

    //Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    //And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
