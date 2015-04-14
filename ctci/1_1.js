
var input = "dep"

function uniqueLetters(str) {
  var letterHash = {}
  for (var i = 0; i < input.length; i++) {
    if (letterHash[input.charAt(i)] !== undefined) {
      return false;
    } else {
      letterHash[input.charAt(i)] = true;
    }
  }
  return true;
}

console.log(uniqueLetters(input));
