'use strict';

module.exports = [function(){
  return {
    template: require('./list.html'),
    restrict: 'E',
    scope: {},
    controller: ['DJStore', 'TeamStore', function(DJStore, TeamStore){
      var vm = this;
      vm.djs = DJStore.all();

      vm.addToTeam = function(dj){
        TeamStore.addMember(dj);
      }

      vm.addNew = function(){
        DJStore.add();
      }
    }],
    controllerAs: 'vm',
    bindToController: true
  }
}];
