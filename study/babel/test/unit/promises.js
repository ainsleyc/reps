
describe('Promises', () => {
  it('should allow promise syntax', () => {
    var promise = new Promise(function(resolve, reject) {});
  });

  it('should trigger success clause', (done) => {
    var promise = new Promise((resolve, reject) => {
      resolve(1);
    });
    promise.then((result) => {
      expect(result).to.equal(1);
      done();
    });
  });

  it('should trigger failure clause', (done) => {
    var promise = new Promise((resolve, reject) => {
      reject(1);
    });
    promise.then((result) => {
    }, (err) => {
      expect(err).to.equal(1);
      done();
    });
  });
});
