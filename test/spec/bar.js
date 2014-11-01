'use strict';

var Bar = require('../../scripts/bar'),
    Utils = require('./utils'), utils = new Utils();

describe('Bar', function () {

  var bar;
  beforeEach(function () {
    bar = new Bar();
  });
    
  it('should say hello', function () {
    bar.get().should.equal('bar 3');
    utils.get().should.equal('angular-browserify-npm-seed');
  });

});