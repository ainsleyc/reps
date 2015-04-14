
var input = "hello";

function removeDups(str) {
  var letterHash = {};
  var result = [];

  for (var i = 0; i < str.length; i++) {
    if (letterHash[str.charAt(i)] === undefined) {
      result.push(str.charAt(i));
      letterHash[str.charAt(i)] = true;
    }
  }

  return result.join("");
}

console.log(removeDups(input));
