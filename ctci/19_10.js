
function rand5() {
  return Math.ceil(Math.random() * 5);
}

function rand7() {
  while (true) {
    var num = 5 * ((rand5() - 1) + (rand5() - 1));
    if (num < 21) { return num % 7 + 1; }
  }
}

