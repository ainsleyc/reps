
function generateCodeHash() {
  var chars = "abcdefghijklmnopqrstuvwxyz".split("");
  var result = {};

  for (var i = 1; i <= chars.length; i++) {
    result[i] = chars[i-1];
  }
  return result;
}

function checkMatching(arr, startIndex, matchValue) {
  var strValue = matchValue + '';
  if (strValue.length === 1) {
    if (arr[startIndex] == strValue) {
      return true; 
    }
  } else if (strValue.length === 2) {
    if (arr[startIndex] == strValue.charAt(0) && arr[startIndex+1] == strValue.charAt(1)) {
      return true; 
    }
  }
  return false;
}

function getStringCodes(arr, startIndex, codeHash) {
  var strings = [];
  if (startIndex >= arr.length) {
    return strings;
  }
  Object.keys(codeHash).forEach(function (index) {
    if (checkMatching(arr, startIndex, index)) {
      var indexStr = index + '';
      var currChar = codeHash[index];
      var subStrings = getStringCodes(arr, startIndex + indexStr.length, codeHash);
      if (subStrings.length > 0) {
        subStrings.forEach(function (subString) {
          strings.push(currChar + subString);
        });
      } else {
        strings.push(currChar);
      }
    } 
  });
  return strings;
}

function codeToStrings(code) {
  var codeHash = generateCodeHash();
  return getStringCodes(code.split(""), 0, codeHash);
}

console.log(codeToStrings("1123"));


