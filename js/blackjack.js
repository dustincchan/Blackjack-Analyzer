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
//this should be implemented more intelligently
var bankRoll = 0;

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
  this.numDecks = numDecks;
  this.penetration = penetration;
  var that = this;

  if (numDecks === null || penetration === null) {
    throw "You didn't specify the number of decks or the penetration";
  }

  if (penetration > numDecks) {
    throw "You can't have more penetration than number of decks";
  }

  this.dealCard = function() {
    return that.cards.shift();
  };
  //identical to dealCard(), but makes the playing code more understandable
  this.burnCard = function() {
    return that.cards.shift();
  };

  //triggered after drawing past penetration
  this.reloadShoe = function() {
    //We create a large array of (numDecks) decks and then shuffle it
    for (var deckNum = 0; deckNum < numDecks; deckNum ++) {
      var d = new Deck();
      this.decks.push(d.cards);
    }
    //"flattening" an array of deck arrays
    //TODO: There's a better way to do this, I just cant get Array.prototype.concat() to play nice
    this.decks.forEach(function(deck) {
      deck.forEach(function(card) {
        that.cards.push(card);
      });
    });
    this.cards = shuffle(this.cards);
    this.burnCard();
  };
  //initial call from Shoe initialization
  this.reloadShoe();

  this.isPastPenetration = function() { // -> Bool
    return this.cards.length < (this.numDecks - this.penetration) * 52;
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

function playHandToCompletion(shoe, hand, dealerUpCard) {
  //actions in order of priority are P, R, D, H/S
  var playerAction = determinePlayerAction(hand, dealerUpCard);
  if (playerAction === "BJ") {
    return [hand, "BJ"];
  } else if (playerAction == "P") {
    if (hand.cards[0][0] === "A") {
      return splitAces(hand, shoe);
    } else {
      var splitHands = splitHand(hand, shoe);
      //recursively playing split hands
      return playHandToCompletion(shoe, splitHands[0], dealerUpCard).concat(playHandToCompletion(shoe, splitHands[1], dealerUpCard));
    }
  } else if (playerAction == "D") {
    hand.receiveCard(shoe.dealCard());
    return [hand, "D"];
  } else if (playerAction == "R") {
    return [hand, "R"];
  } else if (playerAction == "H") { // recursively call this function
    hand.receiveCard(shoe.dealCard());
    return playHandToCompletion(shoe, hand, dealerUpCard);
  } else if (playerAction == "S") {
    return [hand, "S"];
  } else if (playerAction == "BUST") {
    return [hand, "BUST"];
  }
}

function splitHand(hand, shoe) {
  //TODO: you usually can't re-hit/double split Aces, but need to be flexible depending on rules.
  //not really the kosher way to do it, but easier to program & statistically the same
  //could have a dealIncompleteHand() function to handle hands w/ only 1 card dealt
  var firstHand = new Hand();
  var secondHand = new Hand();
  firstHand.receiveCard(hand.cards[0]);
  secondHand.receiveCard(hand.cards[1]);
  firstHand.receiveCard(shoe.dealCard());
  secondHand.receiveCard(shoe.dealCard());
  return [firstHand, secondHand];
}

function splitAces(hand, shoe) { // -> [Hand, "S"], [Hand, "S"]
//programmed for rule where you can't resplit aces nor hit after splitting
//TODO: doesn't allow re-split of aces
  var firstHand = new Hand();
  var secondHand = new Hand();
  firstHand.receiveCard(hand.cards[0]);
  secondHand.receiveCard(hand.cards[1]);
  firstHand.receiveCard(shoe.dealCard());
  secondHand.receiveCard(shoe.dealCard());
  return [firstHand, "S", secondHand, "S"];
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
      return "BJ";
    } else if (hand.cards[0][0] === hand.cards[1][0]) {
      if (basicStrategySplits[hand.cards[0][0]] !== undefined) { //don't wanna split 5s
        return basicStrategySplits[hand.cards[0][0]][dealerUpCardValue];
      } else {
        //treat it as a hard hand
        var playerActionNoSplit = basicStrategyHard[handValue][dealerUpCardValue];
        if (playerActionNoSplit.length === 2) {
          return playerActionNoSplit[0];
        } else {
          return playerActionNoSplit;
        }
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
      if (playerActionHardAfterFirstHand.length === 2) {
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

//TODO: accommodate HIT s-17 or STAND s-17 rule
function playDealerHand(dealerHand, shoe) {
  var dealerHandValue = dealerHand.getHandValue()[0];
  //hard coded for STAND on soft-17
  while (dealerHandValue < 17) {
    dealerHand.receiveCard(shoe.dealCard());
    dealerHandValue = dealerHand.getHandValue()[0];
  }
}

function determineWinnerForHands(playerHands, dealerHand) { // -> ["DEALER", "PLAYER", "PUSH", etc...]
  var dealerHandValue = dealerHand.getHandValue();
  var results = [];

  for (var handIndex = 0; handIndex < playerHands.length; handIndex += 2) {
    var playerAction = playerHands[handIndex + 1]; //have to track if user doubled or surrendered
    var currentHand = playerHands[handIndex];
    var currentHandValue = currentHand.getHandValue();
    // if player busted he/she loses no matter what
    if (playerAction === "BJ" && dealerHandValue[1] !== "BJ") {
      console.log("NATURAL BJ");
      results.push("NATURAL BLACKJACK");
    } else if (playerAction === "BUST") {
      results.push("LOSS");
    } else if (playerAction === "R") {
      results.push("SURRENDER");
    } else {
      // if the dealer busted but the player didn't, player always wins
      if (currentHandValue[0] <= 21 && dealerHandValue[0] > 21) {
        results.push(playerAction === "D" ? "DOUBLE WIN" : "WIN");
      } else if (currentHandValue[0] <= 21 && dealerHandValue[0] <= 21) {
        // if neither the dealer nor the player busted
        if (currentHandValue[0] === dealerHandValue[0]) {
          // push if dealer has same standing val as the player
          results.push("PUSH");
        } else if (currentHandValue[0] > dealerHandValue[0]) {
          // player wins if his/her card total > dealer's
          results.push(playerAction === "D" ? "DOUBLE WIN" : "WIN");
        } else if (currentHandValue[0] < dealerHandValue[0]) {
          //wrote the logic redundantly because I don't want false positives for a dealer win
          results.push(playerAction === "D" ? "DOUBLE LOSS" : "LOSS");
        } else {
          throw "We could not figure out who won the hand";
        }
      }
    }
  }
  return results;
}

//calculates how much was won/lost based on hand results for that round
//TODO: Uh oh... I think...a split natural BJ gets treated as a natural bj
function determinePayout(roundResults, initialBet) {
  var payout = 0;
  roundResults.forEach(function(result) {
    if (result === "NATURAL BLACKJACK") {
      payout += initialBet * 1.5;
    } else if (result === "WIN") {
      payout += initialBet;
    } else if (result === "LOSS") {
      payout -= initialBet;
    } else if (result === "DOUBLE WIN") {
      payout += initialBet * 2;
    } else if (result === "DOUBLE LOSS") {
      payout -= initialBet * 2;
    } else if (result === "SURRENDER") {
      //lose half of bet
      payout -= initialBet * 1.0 / 2;
    }
  });

  return payout;
}

//TODO: this only simulates 1-on-1 games with the dealer, which I guess is ideal for card counting ¯\_(ツ)_/¯
function playRound(shoe, initialBet) {
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
  playerHand.printCardsInHand();
  console.log("dealerUpcard: " + dealerUpCard);
  var resultHands = playHandToCompletion(shoe, playerHand, dealerUpCard);
  console.log(resultHands);
  console.log('----DEALER HAND---');

  //player hand(s) completed, play dealer hand then determine winner
  playDealerHand(dealerHand, shoe);
  console.log("Dealer Total: " + dealerHand.getHandValue()[0]);

  //handResults will look like ["WIN", "DOUBLE WIN"] (usually just 1 element unless split)
  var roundResults = determineWinnerForHands(resultHands, dealerHand);
  console.log(roundResults);
  var payout = determinePayout(roundResults, initialBet); //positive or negative $ integer
  bankRoll += payout;
  console.log("Payout: $" + payout);
  console.log("Bankroll: $" + bankRoll);
  console.log("");
}

//bringing everything together
function playNHands(shoe, numHands, minBet) {
  for (var i = 0; i < numHands; i++) {
    //gotta shuffle the shoe eventually
    if (shoe.isPastPenetration()) {
      shoe.reloadShoe();
    }
    playRound(shoe, minBet);
  }
}

var s = new Shoe(8, 7); //8 decks, 7 deck penetration
playNHands(s, 50, 5);
