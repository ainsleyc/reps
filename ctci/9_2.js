
var input = [
  "cat", "dog", "god", "act", "jump", "hello", "pumj", "blah"
]

function sortByAnagram(arr) {
  var result = [];
  var sortHash = {};

  arr.forEach(function (val) {
    var key = val.split("").sort().join("");
    if (sortHash[key]) {
      sortHash[key].push(val);
    } else {
      sortHash[key] = [val];
    }
  });

  Object.keys(sortHash).forEach(function(key) {
    result = result.concat(sortHash[key])
  })

  return result;
}

console.log(sortByAnagram(input));
