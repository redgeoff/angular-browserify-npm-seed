'use strict';

var Foo = require('../../scripts/foo'),
    Q = require('q');

describe('Foo', function () {

  var foo;
  beforeEach(function () {
    foo = new Foo(Q);
  });

  it('should get', function () {
    return foo.get().then(function (data) {
      data.should.equal('foobar 3');
    });
  });

});
