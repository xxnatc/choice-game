
//obj. constructor
function Image(name, src) {
  this.name = name;
  this.src = src;
  this.vote = 0;
  tpCharacters = [dale, laura, donna, harry, lucy, audrey];
}

//creates characters
var dale = new Image("Dale Cooper", "img/dale-cooper.jpg", 0);
var laura = new Image("Laura Palmer", "img/laura-palmer.jpg", 0);
var donna = new Image("Donna Hayward", "img/donna-hayward.jpg", 0);
var harry = new Image("Harry S. Truman", "img/harry-truman.jpg", 0);
var lucy = new Image("Lucy Moran", "img/lucy-moran.jpg", 0)
var audrey = new Image("Audrey Horne", "img/audrey-horne.jpg", 0)

//workout random numbers
var randomNum = function() {
  return Math.floor(Math.random() * (tpCharacters.length - 1)) + 1;
}

var displayImage = function(){
  image1 = randomNum();
  image2 = randomNum();
    if (image1 == image2) {
    image2 = randomNum();
    console.log(image1)
    console.log(image2)
  }
  else {
  console.log(image1);
  console.log(image2);
  }
//dispay random photo 1
  var chooseImage1 = (tpCharacters[image1]);
  document.getElementById("photoBox1").src = chooseImage1["src"];
  console.log('vote: ' + chooseImage1.vote)
  var character1 = document.getElementById("photo1");
  character1.appendChild(document.createTextNode(chooseImage1["name"]));
  console.log(character1);
//and random photo 2
  var chooseImage2 = (tpCharacters[image2]);
  document.getElementById("photoBox2").src = chooseImage2["src"];
  console.log('vote: ' + chooseImage2.vote)
  var character2 = document.getElementById("photo1");
  character1.appendChild(document.createTextNode(chooseImage2["name"]));
  console.log(character2);
}

displayImage();

tracker.displayImage = function() {

}


// function chooseImage1() {
//   var random = randomNum(0, tpCharacters.length -1);
//   console.log(random = ' + ')
//   for (var i = 0; i < 2; i++) {
//     chooseImage1(i);
//   document.getElementById("photoBox1").src = chooseImage1["src"];

//   var name = document.getElementById("photoName");
//   name.appendChild(document.createTextNode(randomPhoto["name"]));
// }
// }
// displayImage();

// //select one of the 2 images
//   var picButton = document.getElementById('picButton');
//   picButton.addEventListener('click', addImages);
// }

// tracker.displayImage = function() {

// };



// var tracker = {
//   tally: Array(listImage.length).fill(0).genRandChoice: function() {
//     return Math.floor(Math.random() * listImage.length);
//   }
// };


//  createImage("img/dale-cooper", "Dale Cooper");
// // etc etc

// function randomImg() {
//   var random = randomNumber();
//   var randomPhoto = (tpCharacters[random]);
//   console.log(random1);
//   for (var i = 0; i < 2; i++) {
//     randomImg(i);
//     // + duplicate photo error correction
//   }
//   //populating DOM with image
//   document.getElementById("photoGen1").src = randomPhoto["src"];
//   var name1 = document.getElementById("photoName1");
//   name1.appendChild(document.createTextNode(randomPhoto["name"]));
// }

// //calling
// randomImg();


// ++++++++++++++++
// //
// var imagesArray: ["img/dale-cooper.jpg", "img/audrey-horne.jpg",
// "img/laura-palmer.jpg", "img/log-lady.jpg", "img/donna-hayward.jpg",
//  "img/harry-truman.jpg"]

// var displayImage = function() {
//     var imagePrint = '<img src="' + path + Photo + '" alt = "">';
//     var num = Math.floor(Math.random() * (imagesArray.length + 1));
// };

// var addPhoto = function() {
//   var img1Loc = document.getElementById('img1');
//   var img2Loc = document.getElementById('img2');
//   if img1Loc.firstChild) {
//   img1Loc.removeChild(img1Loc.firstChild);
//   }
//   if (img2Loc.firstChild) {
//     img2Loc.removeChild(img2Loc.firstChild);
//   }

//   var img1El = document.getElementById('img');
//   img1El.src = 'img/' + photoFiles[randImg()];
//   img1Loc.appendChild(imgEl);
//   var img2El etc etc

//   do {
//     img2El.src = 'img/' + photoFiles[num()];
//   } while (img2El.src == img1El.src);
//   img2Loc.appendChild(img2El);
//   }


//   addPhoto();
//   var picButton = document.getElementById('picButton');

//   picButton.addEventListener('click', addImages);


//   +++++++++++

// var Photo = function(name, path) {
//   this.name = name;
//   this.path = path;


// var displayImage = function() {
//     var imagePrint = '<img src="' + path + Photo + '" alt = "">';
//     var num = Math.floor(Math.random() * (imagesArray.length + 1));
// };
//     document.pics.src = imagesArray[num];
//     return displayImage;

// };


// }

// var dale = new Photo("Dale Cooper", "img/dale-cooper.jpg");
// var laura = new Photo("Laura Palmer", "img/laura-palmer.jpg");
// var donna = new Photo("Donna Hayward", "img/donna-hayward.jpg");
// var harry = new Photo("Harry S. Truman", "img/harry-truman.jpg");
// var lucy = new Photo("Lucy Moran", "img/Lucy Moran.jpg")
// var audrey = new Photo("Audrey Horne",  "img/audrey-horne.jpg")
// console.log(Photo(dale, laura, donna, harry, lucy, audrey));




// // function chooseImage(images_array, path) {
// //   var path = "img";
// //   var num = Math.floor(Math.random() * images_array.length)
// //   var image = images_array[num];
// //   var imagePrint = '<img src="' + path + image + '" alt = "">';
// // }


// // var Tracker = function() {
// //   var images_array = ["dale-cooper.jpg", "audrey-horne.jpg", "laura-palmer.jpg",
// //    "log-lady.jpg", "donna-hayward.jpg", "harry-truman.jpg"]



// //   ["Laura Palmer", "Dale-Cooper", "Audrey Horne",
// //    "Donna Hayward", "Harry S. Truman"];
// // }
