'use strict'

var expect = require('chai').expect
var rm = require('../')

/* global describe, it */

describe('1rm', function () {
  // 400# x 4
  var expectations = {
    epley: 453,
    brzycki: 436,
    lander: 441,
    lombardi: 459,
    mayhew: 466,
    oconner: 440,
    wathan: 451
  }

  Object.keys(expectations).forEach(function (method) {
    it('can estimate with the #' + method + ' method', function () {
      expect(rm[method](400, 4)).to.be.closeTo(expectations[method], 1)
    })
  })
})
