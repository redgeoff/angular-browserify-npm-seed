'use strict';

var angular = require('../../scripts/angular'),
    foobar = require('../../scripts');

angular.module('hello', ['foobar'])

  .controller('HelloCtrl', ['$scope', 'foo', 'bar', function ($scope, foo, bar) {

    $scope.text = '';

    $scope.foo = function () {
      foo.get().then(function (data) {
        $scope.text = data;
      });
    };

    $scope.bar = function () {
      $scope.text = bar.get();
    };

  }]);