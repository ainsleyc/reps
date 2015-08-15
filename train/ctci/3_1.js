
function TriStack(size) {
  this.size = size
  this.data = new Array(size*3);
  this.ptr1 = 0;
  this.ptr2 = size;
  this.ptr3 = size*2;
}

TriStack.prototype.push = function (value, index) {
  switch (index) {
    case 0:
      this.data[this.ptr1] = value;
      this.ptr1++;
      break;
    case 1:
      this.data[this.ptr2] = value;
      this.ptr2++;
      break;
    case 2:
      this.data[this.ptr3] = value;
      this.ptr3++;
      break;
  }
}

triStack = new TriStack(10);

triStack.push(1, 0);
triStack.push(2, 0);
triStack.push(3, 1);
triStack.push(4, 1);
triStack.push(5, 2);
triStack.push(6, 2);

console.log(triStack.data)
