var data = {
  value:images[randIndex1].votes,
  label: 'Dale Cooper'
  color:
  highlight:

},
  {
  value:25,
  label: 'Audrey Horne'
  color:
  highlight:

},

  {
  value:25,
  label: 'Laura Palmer'
  color:
  highlight:

},


  {
  value:25,
  label: 'Harry Truman'
  color:
  highlight:

},

  {
  value:25,
  label: 'Lucy Moran'
  color:
  highlight:

},

  {
  value:25,
  label: 'Donna Hayward'
  color:
  highlight:

  }
};

var context = document.getElementById('skills').getContext('2d');
var skillsChart = new Chart(context).Doughnut(data, {

animationSteps: 100,
animationEasing: 'easeOutBounce',
animateRotate: true,
animateScale: true
}));




