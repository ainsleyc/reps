
function largestPalindrome(str) {
  var arr = str.split("");
  var charHash = {};

  for (var i = 0; i < arr.length; i++) {
    if (!charHash[arr[i]]) {
      charHash[arr[i]] = [];
    }
    charHash[arr[i]].push(i);
  }

  var longest = [];
  Object.keys(charHash).forEach(function (ch) {
    for (var i = 0; i < charHash[ch].length-1; i++) {
      for (var j = charHash[ch].length-1; j > i; j--) {
        if (charHash[ch][j] - charHash[ch][i] > longest.length) {
          if (checkInternalPalindrome(arr, charHash[ch][i], charHash[ch][j])) {
            longest = arr.slice(charHash[ch][i], charHash[ch][j]+1);    
          }
        }
      }
    }
  });
  if (longest.length === 0) {
    return null
  } else {
    return longest.join("");
  }
}

function checkInternalPalindrome(arr, start, end) {
  while(start < end) {
    if (arr[start] !== arr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true
}

console.log(largestPalindrome("dwewabcbawwqiu"))
