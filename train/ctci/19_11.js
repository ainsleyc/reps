
function getSumPairs(target, arr) {
  var valueHash = {};
  var results = [];
  arr.forEach(function(value) {
    if (valueHash[value]) {
      valueHash[value]++;
    } else {
      valueHash[value] = 1;
    }
  });
  var addedValues = {};
  arr.forEach(function(value) {
    var checkValue = target - value;
    if (!addedValues[value] && !addedValues[checkValue]) {
      if (checkValue !== value && valueHash[checkValue] !== undefined) {
        results.push([value, checkValue]);   
      }
      if (checkValue === value && valueHash[checkValue] >= 2) {
        results.push([value, checkValue]);   
      }
    }
    addedValues[value] = true;
    addedValues[checkValue] = true;
  });
  return results;
}

var input = [-5, 7, 3, 0, 4, 1, 2];

console.log(getSumPairs(7, input));
