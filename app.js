

var tpCharacters = [];
//obj. constructor
function Image(character, path) {
  this.character = character;
  this.path = path;
  this.vote = 0;
  tpCharacters.push(this);
}

//creates characters
var dale = new Image("Dale Cooper", "img/dale-cooper.jpg", 0);
var laura = new Image("Laura Palmer", "img/laura-palmer.jpg", 0);
var donna = new Image("Donna Hayward", "img/donna-hayward.jpg", 0);
var harry = new Image("Harry S. Truman", "img/harry-truman.jpg", 0);
var lucy = new Image("Lucy Moran", "img/lucy-moran.jpg", 0);
var audrey = new Image("Audrey Horne", "img/audrey-horne.jpg", 0);
console.log(tpCharacters);

//workout random numbers
var randomNum = function() {
  return Math.floor(Math.random() * (tpCharacters.length - 1)) + 1;
}

console.log('randomNum output is: ' +randomNum());

var randPhoto1 = document.getElementById('photo1');
var randPhoto2 = document.getElementById('photo2');

var chooseImage1, chooseImage2;

function compareImg() {
  do{
    chooseImage1 = randomNum();
    chooseImage2 = randomNum();

    randPhoto1.src = tpCharacters[chooseImage1].path;
    randphoto2.src = tpCharacters[chooseImage2].path;
  }
  while (randphoto1 === randphoto2);
}

compareImg();

randPhoto1.addEventListener('click', function(){
  tpCharacters[randphoto1].vote += 1;
  console.log(tpCharacters[randphoto1].character + "has "
    + tpCharacters[randPhoto1].vote + "votes");
compareImg();
});

randPhoto2.addEventListener('click', function(){
  tpCharacters[randphoto1].vote += 1;
  console.log(tpCharacters[randphoto1].character + "has "
    + tpCharacters[randPhoto1].vote + "votes");
compareImg();
});



// ++++++++++++++
// var displayImage = function(){
//   image1 = randomNum();
//   image2 = randomNum();
//     if (image1 == image2) {
//     image2 = randomNum();
//     console.log(image1)
//     console.log(image2)
//   }
//   else {
//   console.log(image1);
//   console.log(image2);
//   }
// //dispay random photo 1
//   var chooseImage1 = (tpCharacters[image1]);
//   document.getElementById("photoBox1").src = chooseImage1["src"];
//   console.log('vote: ' + chooseImage1.vote)
//   var character1 = document.getElementById("photo1");
//   character1.appendChild(document.createTextNode(chooseImage1["character"]));
//   console.log(character1);
// //and random photo 2
//   var chooseImage2 = (tpCharacters[image2]);
//   document.getElementById("photoBox2").src = chooseImage2["src"];
//   console.log('vote: ' + chooseImage2.vote)
//   var character2 = document.getElementById("photo1");
//   character1.appendChild(document.createTextNode(chooseImage2["character"]));
//   console.log(character2);
// }

// displayImage();

// tracker.displayImage = function() {

// }
