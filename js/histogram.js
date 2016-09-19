var s = new Shoe(8, 7); //8 decks, 7 deck penetration
var resultingBankRolls = [];
for (var i = 0; i < 1000; i++) {
  bankRoll = 0;
  playNHands(s, 200, 5);
  resultingBankRolls.push(bankRoll);
}
var median = resultingBankRolls.sort()[resultingBankRolls.length/2];
var sum = 0;
for (var j = 0; j < resultingBankRolls.length; j++) {
  sum += resultingBankRolls[j];
}
var mean = sum * 1.0 / resultingBankRolls.length;



var data = [
  {
    x: resultingBankRolls,
    type: 'histogram',
	marker: {
    color: 'rgba(100,250,100,0.7)',
	},
  }
];

var layout = {
  title: "Resulting Banksrolls (Basic Strategy, Flat Betting ($5), 1000 sessions of 100 hands)",
  xaxis: {title: "Ending Bankroll (σ: " + mean + " median: " + median + ")"},
  yaxis: {title: "Count"}
};

Plotly.newPlot('histogram', data, layout);
