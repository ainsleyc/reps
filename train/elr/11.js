
var fs = require('fs');
var liner = require('./liner')

var source = fs.createReadStream('./data/11.txt');

var data = [];

var PRODUCT_LENGTH = 4;

source.pipe(liner);
liner.on('readable', function () {
  var ine;
  while (line = liner.read()) {
    data.push(line.split(' '));
  }
})

liner.on('end', processData)

function processData() {
  var maxProduct = 0;

  for (var x = 0; x < data[0].length; x++) {
    for (var y = 0; y < data.length; y++) {
      var product = Math.max(
        left(data, x, y, PRODUCT_LENGTH),
        right(data, x, y, PRODUCT_LENGTH),
        down(data, x, y, PRODUCT_LENGTH),
        up(data, x, y, PRODUCT_LENGTH),
        upLeft(data, x, y, PRODUCT_LENGTH),
        upRight(data, x, y, PRODUCT_LENGTH),
        downLeft(data, x, y, PRODUCT_LENGTH),
        downRight(data, x, y, PRODUCT_LENGTH) 
      );
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }
  console.log("Max product: " + maxProduct);
}

function left(data, x, y, length) {
  var product = 1;
  var count = 0;
  
  for (count; count < length; count++) {
    if (x + count < data[0].length) {
      product *= parseInt(data[x + count][y]);
    } else {
      return 0;
    }
  }
  return product;
}

function right(data, x, y, length) {
  var product = 1;
  var count = 0;
  
  for (count; count < length; count++) {
    if (x - count >= 0) {
      product *= parseInt(data[x - count][y]);
    } else {
      return 0;
    }
  }
  return product;
}

function down(data, x, y, length) {
  var product = 1;
  var count = 0;
  
  for (count; count < length; count++) {
    if (y + count < data.length) {
      product *= parseInt(data[x][y + count]);
    } else {
      return 0;
    }
  }
  return product;
}

function up(data, x, y, length) {
  var product = 1;
  var count = 0;
  
  for (count; count < length; count++) {
    if (y - count >= 0) {
      product *= parseInt(data[x][y - count]);
    } else {
      return 0;
    }
  }
  return product;
}

function upLeft(data, x, y, length) {
  var product = 1;
  var count = 0;
  
  for (count; count < length; count++) {
    if (y - count >= 0 && x - count >= 0) {
      product *= parseInt(data[x - count][y - count]);
    } else {
      return 0;
    }
  }
  return product;
}

function upRight(data, x, y, length) {
  var product = 1;
  var count = 0;
  
  for (count; count < length; count++) {
    if (y - count >= 0 && x + count < data[0].length) {
      product *= parseInt(data[x + count][y - count]);
    } else {
      return 0;
    }
  }
  return product;
}

function downLeft(data, x, y, length) {
  var product = 1;
  var count = 0;
  
  for (count; count < length; count++) {
    if (y + count < data.length && x - count < 0) {
      product *= parseInt(data[x - count][y + count]);
    } else {
      return 0;
    }
  }
  return product;
}

function downRight(data, x, y, length) {
  var product = 1;
  var count = 0;
  
  for (count; count < length; count++) {
    if (y - count < data.length && x + count < data[0].length) {
      product *= parseInt(data[x + count][y - count]);
    } else {
      return 0;
    }
  }
  return product;
}

