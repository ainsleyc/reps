
function toBinary(dec){
  return (dec >>> 0).toString(2);
}

function countOnes(value) {
  var binaryString = toBinary(value);
  var oneCounter = 0;
  for(var i = 0; i < binaryString.length; i++) {
    if(binaryString[i] === '1') {
      oneCounter++;
    }
  }
  return oneCounter;
}

module.exports.toBinary = toBinary;
module.exports.countOnes = countOnes;
