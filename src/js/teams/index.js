'use strict';

import TeamStore from './providers/team-store';

import djItem from './components/dj-item/dj-item';
import djList from './components/dj-list/dj-list';

export default angular.module('Teams', [])
                        .factory('TeamStore', TeamStore)
                        .component('teamDjList', djList)
                        .component('teamDjListItem', djItem);
