
function getSubsets(currSet, origSetArray, n) {
  if (n >= origSetArray.length) {
    var result = {};
    Object.keys(currSet).forEach(function(key) {
      result[key] = true;
    });
    var resultArray = [];
    resultArray.push(result);
    return resultArray;
  }

  subSets = [];

  // add current item
  currSet[origSetArray[n]] = true;
  subSets = subSets.concat(getSubsets(currSet, origSetArray, n+1));

  // don't add current item
  delete currSet[origSetArray[n]]
  subSets = subSets.concat(getSubsets(currSet, origSetArray, n+1));

  return subSets;
}

var origSet = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(getSubsets({}, origSet, 0));
