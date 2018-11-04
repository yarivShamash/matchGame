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

  var numberArrayLength = numberArray.length;
  var randomizesedArray = []; //this var should have been outside the loop(step 26). once it's here the shuffle works.
  //the while loop below randomizes the numberArray
  while (--numberArrayLength > 0){
    var randomPosition = Math.floor(Math.random() * numberArrayLength);
    var randomizedValue = numberArray[randomPosition]; // this var retrievs the value form the random position
    randomizesedArray.push(randomizedValue);
    numberArray.splice(randomPosition,1);
  };
  console.log(randomizesedArray);// still no more than one number on the array
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