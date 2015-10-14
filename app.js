

var tpCharacters = [];
//obj. constructor
function Image(character, path) {
  this.character = character;
  this.path = path;
  this.vote = 0;
  tpCharacters.push(this);
}

//creates characters
var dale = new Image("Dale Cooper", "img/dale-cooper.jpg");
var laura = new Image("Laura Palmer", "img/laura-palmer.jpg");
var donna = new Image("Donna Hayward", "img/donna-hayward.jpg");
var harry = new Image("Harry S. Truman", "img/harry-truman.jpg");
var lucy = new Image("Lucy Moran", "img/lucy-moran.jpg");
var audrey = new Image("Audrey Horne", "img/audrey-horne.jpg");
var ed = new Image("Ed Hurley", "img/ed-hurley.jpg");
var james = new Image("James Hurley", "img/james-hurley.jpg");
var norma = new Image("Norma Jennings", "img/norma-jennings.jpg");
var nadine = new Image("Nadine Hurley", "img/nadine-hurley.jpg");
var jacobi = new Image()

console.log(tpCharacters);

//workout random numbers
var randomNum = function() {
  return Math.floor(Math.random() * (tpCharacters.length));
}

console.log('randomNum output is: ' +randomNum());

var randPhoto1 = document.getElementById('photoBox1');
var randPhoto2 = document.getElementById('photoBox2');
var characterName1 = document.getElementById('name1');
var characterName2 = document.getElementById('name2');

var chooseImage1, chooseImage2;

function compareImg() {
  do{
    chooseImage1 = randomNum();
    chooseImage2 = randomNum();

    randPhoto1.src = tpCharacters[chooseImage1].path;
    randPhoto2.src = tpCharacters[chooseImage2].path;
    characterName1.innerHTML = tpCharacters[chooseImage1].character;
    characterName2.innerHTML = tpCharacters[chooseImage2].character;
  }
  while (chooseImage1 === chooseImage2);
}

compareImg();

randPhoto1.addEventListener('click', function(){
  tpCharacters[chooseImage1].vote += 1;
  console.log(tpCharacters[chooseImage1].character + " has "
    + tpCharacters[chooseImage1].vote + " votes");
compareImg();
});

randPhoto2.addEventListener('click', function(){
  tpCharacters[chooseImage2].vote += 1;
  console.log(tpCharacters[chooseImage2].character + " has "
    + tpCharacters[chooseImage2].vote + " votes");
compareImg();
});
