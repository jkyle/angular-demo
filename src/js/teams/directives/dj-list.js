'use strict';

module.exports = [function(){
  return {
    template: require('./dj-list.html'),
    restrict: 'E',
    scope: {},
    controller: ['TeamStore', function(TeamStore){
      var vm = this;
      vm.team = TeamStore.get();
      vm.removeMember = function(id){
        TeamStore.removeMember(id);
      }
    }],
    controllerAs: 'vm',
    bindToController: true
  }
}];
