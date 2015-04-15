
var input = "bottlewater";
var target = "waterbottle";

function checkRotated(input, target) {
  return input.concat(input).indexOf(target) > -1; 
}

console.log(checkRotated(input, target));

