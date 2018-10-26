var assert = require('assert');
var linkstation = require('../linkstation.js')
describe('linkstation', function(){
  describe('#getDistance()', function() {
    it('should return 5', function() {
      assert.equal(linkstation.getDistance( [1, 3],[5, 6] ), 5);
    });
    it('should return 5', function() {
      assert.equal(linkstation.getDistance( [5, 6],[1, 3] ), 5);
    });
    it('should return 0', function() {
      assert.equal(linkstation.getDistance( [0, 0],[0, 0] ), 0);
    });
    it('should return "8.485281"', function() {
      assert.equal((linkstation.getDistance( [5, 7],[-1, 1] )).toFixed(6), "8.485281");
    });
  });

  describe('#getPower()', function() {
    it('should return 100', function() {
      assert.equal(linkstation.getPower(10, linkstation.getDistance([0,0], [0,0])), 100);
    });
    it('should return 0', function() {
      assert.equal(linkstation.getPower(1, linkstation.getDistance([0,0], [10000,10000])), 0);
    });
  });
});

