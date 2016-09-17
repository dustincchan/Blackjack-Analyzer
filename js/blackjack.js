//a mess of arrays mapping a player's hand value to a dealer's upcard to the player move
//this is hardcoded for now, but can be changed on the front-end later
//4-Deck to 8-Deck basic strategy, dealer stands on soft 17 from wizardofodds.com

//TEMPLATE: {2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: "", "A": ""}
var basicStrategyHard = {
  4: {2: "H", 3: "H", 4: "H", 5: "H", 6: "H", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"},
  5: {2: "H", 3: "H", 4: "H", 5: "H", 6: "H", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"},
  6: {2: "H", 3: "H", 4: "H", 5: "H", 6: "H", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"},
  7: {2: "H", 3: "H", 4: "H", 5: "H", 6: "H", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"},
  8: {2: "H", 3: "H", 4: "H", 5: "H", 6: "H", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"},
  9: {2: "H", 3: "DH", 4: "DH", 5: "DH", 6: "DH", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"},
  10: {2: "DH", 3: "DH", 4: "DH", 5: "DH", 6: "DH", 7: "DH", 8: "DH", 9: "DH", 10: "H", "A": "H"},
  11: {2: "DH", 3: "DH", 4: "DH", 5: "DH", 6: "DH", 7: "DH", 8: "DH", 9: "DH", 10: "DH", "A": "H"},
  12: {2: "H", 3: "H", 4: "S", 5: "S", 6: "S", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"},
  13: {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"},
  14: {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"},
  15: {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "H", 8: "H", 9: "H", 10: "RH", "A": "H"},
  16: {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "H", 8: "H", 9: "RH", 10: "RH", "A": "RH"},
  17: {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "S", 8: "S", 9: "S", 10: "S", "A": "S"},
  18: {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "S", 8: "S", 9: "S", 10: "S", "A": "S"},
  19: {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "S", 8: "S", 9: "S", 10: "S", "A": "S"},
  20: {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "S", 8: "S", 9: "S", 10: "S", "A": "S"},
  21: {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "S", 8: "S", 9: "S", 10: "S", "A": "S"},
};

var basicStrategySoft = {
  13: {2: "H", 3: "H", 4: "H", 5: "DH", 6: "DH", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"},
  14: {2: "H", 3: "H", 4: "H", 5: "DH", 6: "DH", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"},
  15: {2: "H", 3: "H", 4: "DH", 5: "DH", 6: "DH", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"},
  16: {2: "H", 3: "H", 4: "DH", 5: "DH", 6: "DH", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"},
  17: {2: "H", 3: "DH", 4: "DH", 5: "DH", 6: "DH", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"},
  18: {2: "S", 3: "DS", 4: "DS", 5: "DS", 6: "DS", 7: "S", 8: "S", 9: "H", 10: "H", "A": "H"},
  19: {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "S", 8: "S", 9: "S", 10: "S", "A": "S"},
  20: {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "S", 8: "S", 9: "S", 10: "S", "A": "S"},
  21: {2: "S", 3: "S", 4: "S", 5: "S", 6: "S", 7: "S", 8: "S", 9: "S", 10: "S", "A": "S"}
};

var basicStrategySplits = {
  2: {2: "P", 3: "P", 4: "P", 5: "P", 6: "P", 7: "P", 8: "H", 9: "H", 10: "H", "A": "H"}, //2,2
  3: {2: "P", 3: "P", 4: "P", 5: "P", 6: "P", 7: "P", 8: "H", 9: "H", 10: "H", "A": "H"}, //3,3
  4: {2: "H", 3: "H", 4: "H", 5: "P", 6: "P", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"}, //4,4
  //never split 5,5
  6: {2: "P", 3: "P", 4: "P", 5: "P", 6: "P", 7: "H", 8: "H", 9: "H", 10: "H", "A": "H"}, //6,6
  7: {2: "P", 3: "P", 4: "P", 5: "P", 6: "P", 7: "P", 8: "H", 9: "H", 10: "H", "A": "H"}, //7,7
  8: {2: "P", 3: "P", 4: "P", 5: "P", 6: "P", 7: "P", 8: "P", 9: "P", 10: "P", "A": "P"}, //8,8
  9: {2: "P", 3: "P", 4: "P", 5: "P", 6: "P", 7: "S", 8: "P", 9: "P", 10: "S", "A": "S"}, //9,9
  //dont usually split 10s unless high count
  'A': {2: "P", 3: "P", 4: "P", 5: "P", 6: "P", 7: "P", 8: "P", 9: "P", 10: "P", "A": "P"}, //A, A
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

  if (numDecks === null || penetration === null) {
    throw "You didn't specify the number of decks or the penetration";
  }

  if (penetration > numDecks) {
    throw "You can't have more penetration than number of decks";
  }

  //We create a large array of (numDecks) decks and then shuffle it
  for (var deckNum = 0; deckNum < numDecks; deckNum ++) {
    var d = new Deck();
    this.decks.push(d.cards);
  }

  //"flattening" an array of deck arrays
  //FIXME: There's a better way to do this, I just cant get array.prototype.concat() to play nice
  this.decks.forEach(function(deck) {
    deck.forEach(function(card) {
      that.cards.push(card);
    });
  });
  this.cards = shuffle(this.cards);
  //identical to dealCard(), but makes the playing code more understandable
  this.burnCard = function() {
    return that.cards.shift();
  };
  //might not be necessary
  this.dealCard = function() {
    return that.cards.shift();
  };
}

function Hand() {
  this.cards = [];
  var that = this;

  this.getHandValue = function() {
    var handTotal = 0;
    var numberOfAces = 0;
    for (var cardIndex = 0; cardIndex < that.cards.length; cardIndex++) {
      var currentCard = that.cards[cardIndex];
      var cardValue = currentCard[0];
      var cardSuit = currentCard[1];

      if (cardValue === "A") {
        numberOfAces += 1;
      }

      handTotal += cardToValueMap[cardValue];
    }
    //We want to calculate a hard hand if the soft count goes over 21
    while (numberOfAces > 0 && handTotal >= 22) {
      numberOfAces -= 1;
      handTotal -= 10;
    }

    if (numberOfAces > 0) {
      return [handTotal, "Soft"];
    } else {
      return [handTotal, "Hard"];
    }
  };

  this.printCardsInHand = function() {
    console.log('---HAND---');
    this.cards.forEach(function(card) {
      console.log(card[0] + " of " + card[1]);
    });
    console.log('---END---');
  };

  this.receiveCard = function(card) {
    this.cards.push(card);
  };
}

//FIXME: this only simulates 1-on-1 games with the dealer, which I guess is ideal for card counting
function playRound(shoe, bet, strategy) {
  //the initial card dealt to the dealer will be the dealer's upcard, player gets dealt first
  var playerHand = new Hand();
  var dealerHand = new Hand();

  for (var i = 0; i < 2; i++) {
    playerHand.receiveCard(shoe.dealCard());
    dealerHand.receiveCard(shoe.dealCard());
  }
  //first card dealt to dealer becomes its upcard
  var dealerUpCard = dealerHand.cards[0][0]; //could be int or 'A'
  //now it's time for the player to play the game
  var playerAction = determinePlayerAction(playerHand, dealerUpCard);
  if (playerAction === "R") {
    console.log(playerHand.getHandValue());
    console.log(dealerUpCard);
    console.log(playerAction);
    console.log('----------------------');
  }
}

function determinePlayerAction(hand, dealerUpCard) {
  var handValue = hand.getHandValue()[0];
  var handType = hand.getHandValue()[1];
  var dealerUpCardValue =  (["J", "Q", "K"].indexOf(dealerUpCard) !== -1) ? 10 : dealerUpCard;
  if (dealerUpCardValue !== "A") {
    dealerUpCardValue = parseInt(dealerUpCardValue);
  }
  //if initial hand then we can do double, split, etc
  if (hand.cards.length === 2){
    if (handValue === 21) {
      return "BLACKJACK";
    } else if (hand.cards[0][0] === hand.cards[1][0]) {
      if (basicStrategySplits[hand.cards[0][0]] !== undefined) { //don't wanna split 5s
        return basicStrategySplits[hand.cards[0][0]][dealerUpCardValue];
      } else {
        return basicStrategyHard[handValue][dealerUpCardValue];
      }
    } else if (handType === "Soft") { //soft hand
      var playerActionSoft = basicStrategySoft[handValue][dealerUpCardValue];
      if (playerActionSoft.length === 2) { //DS or DH
        return playerActionSoft[0];
      } else {
        return playerActionSoft;
      }
    } else { //hard hand
      var playerActionHard = basicStrategyHard[handValue][dealerUpCardValue];
      if (playerActionHard.length === 2) { //RH or DH
        return playerActionHard[0];
      } else {
        return playerActionHard;
      }
    }
  } else { //plays after initial hand
    if (handValue > 21) {
      return "BUST";
    } else if (handType === "Soft") {
      var playerActionSoftAfterFirstHand = basicStrategySoft[handValue][dealerUpCardValue];
      if (playerActionSoftAfterFirstHand.length === 2) {
        return playerActionSoftAfterFirstHand[1];
      } else {
        return playerActionSoftAfterFirstHand;
      }
    } else { //hard hand > 2 cards
      var playerActionHardAfterFirstHand = basicStrategyHard[handValue][dealerUpCardValue];
      if (playerActionHardAFterFirstHand.length === 2) {
        return playerActionHardAfterFirstHand[1];
      } else {
        return playerActionHardAfterFirstHand;
      }
    }
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

var s = new Shoe(100, 99);
s.burnCard();
for (var i = 0; i < 200; i++) {
  playRound(s, 10, {});
}
