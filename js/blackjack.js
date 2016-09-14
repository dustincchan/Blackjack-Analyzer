var cardToValueMap = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  "J": 10,
  "Q": 10,
  "K": 10,
  "A": 11
};

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

  Shoe.prototype.dealCard = function() { // -> [cardValue, suit]]
    this.cards.shift();
  };

  //identical to dealCard(), but makes the playing code more understandable
  Show.prototype.burnCard = function() {
    this.cards.shift();
  };
}

function Hand() {
  this.count = 0;
  this.cards = [];
  var that = this;

  //Not sure if this is necessary
  Hand.prototype.getCard = function(card) {
    that.cards.push(card);
  };

  Hand.prototype.getHandValue = function() {
    that.count = 0;
    var numberOfAces = 0;
    this.cards.forEach(function(card) {
      var cardValue = card[0];
      var cardSuit = card[1];

      if (cardValue === "A") {
        numberOfAces += 1;
      }

      that.count += cardToValueMap[cardValue];
    });

    //We want to calculate a hard hand if the soft count goes over 21
    while (numberOfAces > 0 && that.count >= 22) {
      numberOfAces -= 1;
      that.count -= 10;
    }

    if (numberOfAces > 0) {
      return [this.count, "Soft"];
    } else {
      return [this.count, "Hard"];
    }
  };
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
