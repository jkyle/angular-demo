'use strict';

import djStore from './providers/dj-store.js';
import djItem from './components/item/item';
import djList from './components/list/list';

export default angular.module('DJs', [])
                        .factory('DJStore', djStore)
                        .component('djList', djList)
                        .component('djItem', djItem);
