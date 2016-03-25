'use strict';

import randomData from './providers/random-data';
import actionButton from './components/action-button/action-button';

module.exports = angular.module('AppUtil', [])
                        .factory('RandomData', randomData)
                        .component('actionButton', actionButton);
