var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var numberArray = [];

  for (var i = 1; i<=8; i++){
    numberArray.push(i, i);
  };

  var randomizedNumberArray = [];
  
  var numberArrayLength = numberArray.length();

  while (var j = 1, j <= numberArrayLength){
    function randomNumber(){
      randomizedNumberArray.push(Math.floor(Math.random() * 8));
    };
    console.log(randomizedNumberArray);
    j++;
  };
              //got stuck here at stage 26 :(
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};