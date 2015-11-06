
describe('Generators', () => {
  it('should correctly yield', () => {
    function *gen() {
      for (var i = 0; i < 10; i++) {
        yield i;
      }
      return 'done';
    }
    var it = gen();
    var next;
    for (var j = 0; j < 10; j++) {
      var next = it.next();
      expect(next.value).to.equal(j);
      expect(next.done).to.equal(false);
    }
    next = it.next();
    expect(next.value).to.equal('done');
    expect(next.done).to.equal(true);
  });

  it('should accept for..of syntax', () => {
    function *gen() {
      for (var i = 0; i < 10; i++) {
        yield i;
      }
    }
    var count = 0;
    for (var next of gen()) {
      expect(next).to.equal(count);
      count++;
    }
  });
});
