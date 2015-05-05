
function stringPermutations(str) {
  var results = permute(str.split("")); 
  var strResults = [];
  results.forEach(function(result) {
    strResults.push(result.join("")); 
  })
  return strResults;
}

function permute(arr) {
  var results = [];
  for(var i = 0; i < arr.length; i++) {
    var currArr = [];
    currArr.push(arr.splice(i, 1));
    var subArrs = permute(arr);
    if (subArrs.length === 0) {
      results.push(currArr);
    } else {
      subArrs.forEach(function(subArr) {
        results.push(currArr.concat(subArr));
      });
    }
    arr.splice(i, 0, currArr[0])
  }
  return results;
}

console.log(stringPermutations("abcdef"));
