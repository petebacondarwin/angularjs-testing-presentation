
describe('average function', function() {
  var average;

  beforeEach(module('average-app'));
  beforeEach(inject(function(_average_) {
    average = _average_;
  }));

  it('should return the average of the values in an array', function() {
    expect(average([1,2,3,4])).toBe(2.5);
  });

  it('should return 0 for an empty array', function() {
    expect(average([])).toBe(0);
  });

  it('should throw invalid parameter `values`, if it is not an array', function() {
    expect(function() { average(); }).toThrow('invalid parameter `values`');
    expect(function() { average("abc"); }).toThrow('invalid parameter `values`');
    expect(function() { average(234); }).toThrow('invalid parameter `values`');
  });
});