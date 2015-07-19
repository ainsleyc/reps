
function getDrawPerms(startValue, maxDraws) {
  var results = [];
  if (startValue <= 0) {
    return results;
  }
  for (var i = 1; i <= maxDraws; i++) {
    if (startValue >= i) {
      var currDraw = [i];
      var subArrays = getDrawPerms(startValue - i, maxDraws)
      if (subArrays.length > 0) {
        subArrays.forEach(function(subArray) {
          results.push(currDraw.concat(subArray));
        })
      } else {
        results.push(currDraw);
      }
    }
  }
  return results;
}

console.log(getDrawPerms(4, 3));
