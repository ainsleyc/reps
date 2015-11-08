import {TestClass} from '../../src/test.js';

describe('Fat Arrows', () => {
  it('should allow importing', () => {
    var test = new TestClass;
    expect(test.val).to.equal(1);
    expect(test.func()).to.equal(2);
  });
});
