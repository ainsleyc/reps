
describe('Default, Rest, and Spread', () => {
  it('should allow default values', () => {
    function test(x=1) {
      return x;
    }
    expect(test()).to.equal(1);
    expect(test(2)).to.equal(2);
  });

  it('should allow rest parameters', () => {
    function test(x, ...y) {
      return x + y[0] + y[1];
    }
    expect(test(1, 2, 3, 4)).to.equal(6);
  });

  it('should allow splats', () => {
    function test(x, y, z) {
      return x + y + z;
    }
    expect(test(...[1, 2, 3])).to.equal(6);
  });

});
