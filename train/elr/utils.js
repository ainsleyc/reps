
var utils = {
  isPrime: function (num) {
    var target = Math.max(Math.ceil(Math.sqrt(num)), 2)
    for (var i = 2; i <= target; i++) {
      if (num % i === 0 && num / i !== 1) {
        return false;
      }
    }
    return true;
  }
}

module.exports = utils;

