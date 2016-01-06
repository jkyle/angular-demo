'use strict';

module.exports = angular.module('Teams', [])
                        .factory('TeamStore', require('./providers/team-store'))
                        .directive('teamDjList', require('./directives/dj-list'));
