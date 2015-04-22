
var input = [6, 7, 1, 3, 4, 2, 7, 6, 8]

function stackSort(stack) {
  var tempStack = [];

  while (stack.length > 0) {
    if (tempStack.length === 0) {
      tempStack.push(input.pop());
    } else {
      if (tempStack[tempStack.length-1] >= stack[stack.length-1]) {
        tempStack.push(input.pop());
      } else {
        temp = stack.pop();
        while (tempStack.length > 0 && tempStack[tempStack.length-1] <= temp) {
          stack.push(tempStack.pop());

        }
        tempStack.push(temp);
      }
    }
  }
  return tempStack;
}

console.log(stackSort(input));
