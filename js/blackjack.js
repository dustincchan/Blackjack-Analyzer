//a mess of arrays mapping a player's hand value to a dealer's upcard to the player move
//this is hardcoded for now, but can be changed on the front-end later
//4-Deck to 8-Deck basic strategy, dealer stands on soft 17 from wizardofodds.com

//TEMPLATE: {2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: "", "A": ""}
var basicStrategyHard = {
  4: "HIT ALL",
  9: {2: "H", 3: "DH", 4: "DH", 5: "DH", 6: "DH", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"},
  10: {2: "DH", 3: "DH", 4: "DH", 5: "DH", 6: "DH", 7: "DH", 8: "DH", 9: "DH", 10: "H", "A": "H"},
  11: {2: "DH", 3: "DH", 4: "DH", 5: "DH", 6: "DH", 7: "DH", 8: "DH", 9: "DH", 10: "DH", "A": "H"},
  12: {2: "H", 3: "H", 4: "S", 5: "S", 6: "S", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"},
  13: {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"},
  14: {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"},
  15: {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "H", 8: "H", 9: "H", 10: "RH", "A": "H"},
  16: {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "H", 8: "H", 9: "RH", 10: "RH", "A": "RH"},
  17: "STAY ALL",
  18: "STAY ALL",
  19: "STAY ALL",
  20: "STAY ALL",
  21: "STAY ALL"
};

var basicStrategySoft = {
  13: {2: "H", 3: "H", 4: "H", 5: "DH", 6: "DH", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"},
  14: {2: "H", 3: "H", 4: "H", 5: "DH", 6: "DH", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"},
  15: {2: "H", 3: "H", 4: "DH", 5: "DH", 6: "DH", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"},
  16: {2: "H", 3: "H", 4: "DH", 5: "DH", 6: "DH", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"},
  17: {2: "H", 3: "DH", 4: "DH", 5: "DH", 6: "DH", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"},
  18: {2: "S", 3: "DS", 4: "DS", 5: "DS", 6: "DS", 7: "S", 8: "S", 9: "H", 10: "H", "A": "H"},
  19: "STAY ALL",
  20: "STAY ALL",
  21: "STAY ALL"
};

var basicStrategySplits = {

};

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

//FIXME: this only simulates 1-on-1 games with the dealer, which I guess is ideal for card counting
function playRound(Shoe, bet, strategy) {
  //FIXME: coded for 1-vs-1 situation at the moment
  //the initial card dealt to the dealer will be the dealer's upcard, player gets dealt first
  var playerHand = new Hand();
  var dealerHand = new Hand();

  playerHand.getCard(Shoe.dealCard);
  dealerHand.getCard(Shoe.dealCard);
  playerHand.getCard(Shoe.dealCard);
  dealerHand.getCard(Shoe.dealCard);
  //first card dealt to dealer becomes its upcard
  dealerUpCard = dealerHand.cards[0];

  //now it's time to play the game

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
