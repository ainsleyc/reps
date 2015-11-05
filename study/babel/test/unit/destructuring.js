
describe('Destructuring', () => {
  it('should allow list destructuring', () => {
    var [a, , b] = [1, 2, 3];
    expect(a).to.equal(1);
    expect(b).to.equal(3);
  });

  it('should allow object destructuring', () => {
    var obj = {
      start: 1,
      end: () => { return 2; }
    };
    var {start, end} = obj;
    expect(start).to.equal(1);
    expect(end()).to.equal(2);
  });
});
