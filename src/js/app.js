var angular = require('angular'),
    route = require('angular-route'),
    _ = require('lodash');

var djs = require('./djs'),
    teams= require('./teams'),
    appUtil = require('./app-util');

module.exports = angular.module('APP',['ngRoute',
                                       djs.name,
                                       appUtil.name,
                                       teams.name]);
