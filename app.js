
//constructor to build photo objects
//eg
var Photo = function(name, path) {
  this.name = name;
  this.path = path;
  this.imagesArray = ["img/dale-cooper.jpg", "img/audrey-horne.jpg", "img/laura-palmer.jpg",
   "img/log-lady.jpg", "img/donna-hayward.jpg", "img/harry-truman.jpg"]


this.displayImage = function() {
    var imagePrint = '<img src="' + path + Photo + '" alt = "">';
    var num = Math.floor(Math.random() * (imagesArray.length + 1));
    document.pics.src = imagesArray[num];
    return displayImage;

};


}

var dale = new Photo("Dale Cooper", "img/dale-cooper.jpg");
var laura = new Photo("Laura Palmer", "img/laura-palmer.jpg");
var donna = new Photo("Donna Hayward", "img/donna-hayward.jpg");
var harry = new Photo("Harry S. Truman", "img/harry-truman.jpg");
var lucy = new Photo("Lucy Moran", "img/Lucy Moran.jpg")
var audrey = new Photo("Audrey Horne",  "img/audrey-horne.jpg")
console.log(Photo(dale, laura, donna, harry, lucy, audrey));




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
