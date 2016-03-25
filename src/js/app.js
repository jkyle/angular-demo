import angular from 'angular';
import _ from 'lodash';

import djs from './djs';
import teams from './teams';
import appUtil from './app-util';

export default angular.module('APP',[ djs.name, appUtil.name, teams.name]);
