'use strict';

module.exports = angular.module('AppUtil', [])
                        .factory('RandomData', require('./providers/random-data'));
