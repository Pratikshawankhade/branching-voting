$(document).ready(function() {
  var age = parseInt(prompt("What is your current age?"));

  if (age >= 21) {
    $('#name').show();
  }  else {
    $('#under-21').show()}
});
