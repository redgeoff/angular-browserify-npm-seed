'use strict';

var angular = require('./angular');

var app = angular.module('foobar', []);

app.service('foo', ['$q', require('./foo')]);

app.service('bar', require('./bar'));