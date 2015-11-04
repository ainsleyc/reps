
describe('Classes', () => {
  class Base {
    constructor() {
      this.baseVar = 1;
    }
    testFunc() {
      return 4;
    }
    static testStatic() {
      return 5;
    }
  }

  // Need to manually call super()?
  class Sub1 extends Base {
    constructor() {
      super();
      this.baseVar = 2;
    }
  }

  class Sub2 extends Base {
    constructor() {
      super();
      this.subVar = 3;
    }
  }

  it('should correctly instantiate new instances', () => {
    var base = new Base();
    expect(base.baseVar).to.equal(1);
    expect(base.testFunc()).to.equal(4);
  });

  it('should allow static functions', () => {
    expect(Base.testStatic()).to.equal(5);
  });

  it('should correctly overwrite base variables', () => {
    var sub1 = new Sub1();
    expect(sub1.baseVar).to.equal(2);
  });

  it('should run subclass constructor with "super()"', () => {
    var sub2 = new Sub2();
    expect(sub2.baseVar).to.equal(1);
    expect(sub2.subVar).to.equal(3);
  });

});
