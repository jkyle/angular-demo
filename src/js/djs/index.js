'use strict';

module.exports = angular.module('DJs', [])
                        .factory('DJStore', require('./providers/dj-store'))
                        .directive('djList', require('./directives/list'))
                        .directive('djItem', require('./directives/item'));
