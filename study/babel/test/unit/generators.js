
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

  it('should allow try/catch error handling', (done) => {
    function *gen() {
      throw new Error('BLAH');
    }
    var it = gen();
    try {
      it.next();
    }
    catch (err) {
      done();
    }
  });

  it('should allow generator delegation', () => {
    function *end() {
      yield 3;
      yield 4;
    }
    function *start() {
      yield 1;
      yield 2;
      yield *end();
      yield 5;
    }
    var count = 1;
    for (var next of start()) {
      expect(next).to.equal(count);
      count++;
    }
  });
});
