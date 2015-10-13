
//constructor to build photo objects
//eg
var Photo = function(name, path) {
  this.name = name;
  this.path = path;
}

var dale = new Photo("Dale Cooper", "dale-cooper.jpg");
var laura = new Photo("Laura Palmer", "laura-palmer.jpg");
var donna = new Photo("Donna Hayward", "donna-hayward.jpg");
var harry = new Photo("Harry S. Truman", "harry-truman.jpg");
var logLady = new Photo("Lady with the log", "log-lady.jpg")
var audrey = new Photo("Audrey Horne",  "audrey-horne.jpg")



var imagesArray = ["dale-cooper.jpg", "audrey-horne.jpg", "laura-palmer.jpg",
   "log-lady.jpg", "donna-hayward.jpg", "harry-truman.jpg"]

function displayImage() {
    var num = Math.floor(Math.random() * (imagesArray.length+1));
    document.getElementById("canvas").src = imagesArray[num];
}

// function chooseImage(images_array, path) {
//   var path = "img";
//   var num = Math.floor(Math.random() * images_array.length)
//   var image = images_array[num];
//   var imagePrint = '<img src="' + path + image + '" alt = "">';
// }


// var Tracker = function() {
//   var images_array = ["dale-cooper.jpg", "audrey-horne.jpg", "laura-palmer.jpg",
//    "log-lady.jpg", "donna-hayward.jpg", "harry-truman.jpg"]



//   ["Laura Palmer", "Dale-Cooper", "Audrey Horne",
//    "Donna Hayward", "Harry S. Truman"];
// }
