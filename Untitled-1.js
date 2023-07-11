var dogAge = document.getElementById('age').value;

function humanAge() {
  var humanAgeCalc = (dogAge - 2) * 4 + 21;
  alert("Your dog is " + humanAgeCalc + " years old in human years.");
}
