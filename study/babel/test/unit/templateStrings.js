
describe('Template Strings', () => {
  it('should allow string interpolation', () => {
    var name = 'Bob';
    expect(`Hi ${name}`).to.equal('Hi Bob');
  });
});
