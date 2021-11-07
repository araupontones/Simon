//define array of colors
var colors = ["yellow", "blue", "green", "red"];

// function to pick a color randomly
function pickRandom() {
  var randomNumber = Math.random() * 4
  randomNumber = Math.floor(randomNumber);
  var selectedColor = colors[randomNumber];

  return (selectedColor);
}

//Define starting colors
function startSimon() {
  var randomColor = pickRandom();
  var arraySimon = [randomColor];
  return arraySimon;
}

arraySimon = startSimon();
randomColor = arraySimon[0];

//define starting level
var level = arraySimon.length
//when document starts



function askUserKey() {
  $(document).on("keydown", function() {
    var levelText = "Level " + level;

    $("h1").text(levelText);
    playSound(randomColor);
    animateButton(randomColor);
  })

}

askUserKey();

//BUtton on click
var levelPlayer = 0;
var arrayPlayer = [];
$(".btn").on("click", function(event) {

  //define parameters of selected
  var idElement = $(this).attr("id");
  //add animation when pressed
  animateButton(idElement);

  //play soubds
  playSound(idElement);

  //check if correct
  if (idElement === arraySimon[levelPlayer]) {
    levelPlayer++
    levelText = "Go Marti! Level " + (levelPlayer + 1);
    $("h1").text(levelText);

//if incorrect
  } else {
    levelPlayer = 0;
    playWrong();
    $("h1").text("Game Over, Press any key to restart");
    arraySimon = startSimon();
    randomColor = arraySimon[0];
    level = arraySimon.length;
  }


//increase array of SImon when needed
  if (levelPlayer === level) {

    levelPlayer = 0;
    //generate random computer
    randomColor = pickRandom();
    arraySimon.push(randomColor);
    level = arraySimon.length;

    //play soubds
    setTimeout(function() {
      animateButton(randomColor);
      playSound(randomColor);
    }, 700);


  }


});

//play sounds





//To anumate button
function animateButton(boton) {
  //add animation when pressed
  var idButon = generateId(boton)
  $(idButon).addClass("pressed");
  setTimeout(function() {
    $(idButon).removeClass("pressed");
  }, 100);

}

//function to play sound
function playSound(pressedButton) {
  var soundFile = "sounds/" + pressedButton + ".mp3";
  var sound = new Audio(soundFile);
  sound.play();

}

//create Id of selected element
function generateId(boton) {
  return (selectorElement = "#" + boton);

}

//to play wrong
function playWrong() {
  var soundWrong = new Audio("sounds/wrong.mp3");
  soundWrong.play();
}


//to check if arrays are identical
function arraysSame(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return fals;
      e
    }
    return true;
  }



}
