
describe('Maps, Sets', () => {
  it('should allow Sets', () => {
    var s = new Set();
    s.add(1);
    s.add('test');
    expect(s.has(1)).to.equal(true);
    expect(s.has('test')).to.equal(true);
    expect(s.has(2)).to.equal(false);
  });

  it('should allow WeakSets', () => {
    var s = new WeakSet();
    var obj = { 'test': 1 };
    s.add(obj);
    s.add({ 'test': 2 });
    expect(s.has(obj)).to.equal(true);
  });

  it('should allow Maps', () => {
    var m = new Map();
    m.set('hello', 1);
    expect(m.get('hello')).to.equal(1);
    expect(m.get('bye')).to.equal(undefined);
  });

  it('should allow WeakMaps', () => {
    var m = new WeakMap();
    var obj = { 'test': 1 };
    m.set(obj, 1);
    expect(m.get(obj)).to.equal(1);
  });

});
