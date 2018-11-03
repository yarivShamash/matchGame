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

  for (var i = 1; i <= 8; i++){
    numberArray.push(i, i);
  };

  var numberArrayLength = numberArray.length, randomPosition, ranPosValue;


  while (--numberArrayLength > 0){
    
    var randomPosition = Math.floor(Math.random() * (numberArrayLength + 1)); //this generates a random number between 0 to the length of the numberArray
    ranPosValue = numberArray[randomPosition]; //this stores the vale at the random position in this variable
    numberArray[randomPosition] = numberArray[numberArrayLength];//this swaps the values from the random position and the current position
    numberArray[numberArrayLength] = ranPosValue; //this stores the vale from the random positino in the current positinos

  };
  console.log(randomizedNumberArray);
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