'use strict';

var expect = require('chai').expect;
var rm     = require('../');

describe('1rm', function () {

  describe('#epley', function () {

    it('calculates a 1RM using the Epley method', function () {
      expect(rm.epley(100, 10)).to.be.closeTo(133, 1);
    });

  });

  describe('#brzycki', function () {

    it('calculates a 1RM using the Brzycki method', function () {
      expect(rm.brzycki(100, 10)).to.be.closeTo(133, 1);
    });

  });

});
