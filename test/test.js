var assert = require('assert');
var linkstation = require('../linkstation.js')
console.log(linkstation);
describe('#getDistance()', function() {
  it('should return 5', function() {
    assert.equal(linkstation.getDistance( [1, 3],[5, 6] ), 5);
  });
});