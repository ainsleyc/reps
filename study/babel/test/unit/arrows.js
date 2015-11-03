
describe('Fat Arrows', () => {
  it('should bind "this" during object declaration', () => {
    var testObj = {
      testInt: 1,
      testFunc() {
        expect(this.testInt).to.equal(1);
      }
    };
    testObj.testFunc();
  });

  it('should allow anonymous function declation', () => {
    var nums = [1, 1, 1];
    // Yuck... optional parenthesis
    nums.forEach((x) => {
      expect(x).to.equal(1);
    });
  });

});
