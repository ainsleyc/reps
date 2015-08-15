
var str1 = "hello"
var str2 = "lleho"

function checkAnagrams(str1, str2) {
  var arr1 = str1.split("").sort().join("");
  var arr2 = str2.split("").sort().join("");
  return arr1 == arr2;
}

console.log(checkAnagrams(str1, str2));
