import babel from '../../src/babel';

describe('babel', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(babel, 'greet');
      babel.greet();
    });

    it('should have been run once', () => {
      expect(babel.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(babel.greet).to.have.always.returned('hello');
    });
  });
});
