
describe('Let, Const', () => {
  it('should create block scoping with let', () => {
    let x = 1
    if(true) {
      let x = 2;
    }
    expect(x).to.equal(1);
  });

  it('should enforce const variables', () => {
    function test() {
      const x = 1;
    }
  });

});
