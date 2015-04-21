
var numbers = require('..');
var assert = require('assert');

describe('numbers(input)', function() {
  it('should fix integer', function() {
    assert(numbers('215') === '215');
    assert(numbers('15215') === '15,215');
    assert(numbers('9015215') === '9,015,215');
  });

  it('should fix float', function() {
    assert(numbers('215.215') === '215.215');
    assert(numbers('15215,215') === '15,215.215');
    assert(numbers('9015215.215') === '9,015,215.215');
  });

  it('should fix multiple numbers', function() {
    assert(numbers('215 and 215.215') === '215 and 215.215');
    assert(numbers('15215 and 15215,215') === '15,215 and 15,215.215');
    assert(numbers('9015215 and 9015215.215') === '9,015,215 and 9,015,215.215');
  });
});
