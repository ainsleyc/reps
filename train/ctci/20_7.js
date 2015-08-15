
function longestWordOfWords(arr) {
  var longestWord = null;
  arr.forEach(function(word) {
    var match = checkSubStrMatch(word, word, arr);
    if (match) {
      if (longestWord === null || longestWord.length < word.length) {
        longestWord = word;
      }
    }
  });
  return longestWord; 
}

function checkSubStrMatch(str, orig, arr) {
  if (str.length === 0) { return true; }
  for (var i = 0; i < arr.length; i++) {
    var key = arr[i];
    if (key !== orig && str.indexOf(key) === 0) {
      var subStr = str.slice(key.length, str.length);
      var result = checkSubStrMatch(subStr, orig, arr);
      if (result) { return true; }
    }
  }
  return false;
}

var input = ['test', 'tester', 'testertest', 'testing', 'testingtester'];

console.log(longestWordOfWords(input));
